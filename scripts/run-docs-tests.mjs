import { spawn } from 'node:child_process'
import { request } from 'node:http'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
let server

function waitForServer(attempt = 0) {
  return new Promise((resolve, reject) => {
    const requestHandle = request('http://127.0.0.1:4174', (response) => {
      response.resume()
      resolve()
    })
    requestHandle.once('error', () => {
      if (attempt >= 50) {
        reject(new Error('Documentation server did not become ready.'))
        return
      }
      setTimeout(() => resolve(waitForServer(attempt + 1)), 100)
    })
    requestHandle.end()
  })
}

function stopServer() {
  if (server && !server.killed) server.kill('SIGTERM')
}

try {
  server = spawn(process.execPath, ['scripts/serve-docs.mjs'], { cwd: root, stdio: 'inherit' })
  await waitForServer()
  const test = spawn(process.execPath, [join(root, 'node_modules', '@playwright', 'test', 'cli.js'), 'test', '-c', 'docs/playwright.config.ts'], {
    cwd: root,
    env: { ...process.env, PLAYWRIGHT_SERVER_MANAGED: 'true' },
    stdio: 'inherit'
  })
  process.exitCode = await new Promise((resolve) => test.once('exit', (code) => resolve(code ?? 1)))
} finally {
  stopServer()
}
