import { createReadStream, existsSync } from 'node:fs'
import { createServer } from 'node:http'
import { dirname, extname, join, normalize } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(dirname(fileURLToPath(import.meta.url))), 'docs', '.vitepress', 'dist')
const contentTypes = {
  '.css': 'text/css',
  '.html': 'text/html',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
}

function resolveFile(pathname) {
  const relativePath = normalize(pathname.replace(/^\/+/, '') || 'index.html').replace(/^([/\\])+/, '')
  const candidates = [
    join(root, relativePath),
    join(root, `${relativePath}.html`),
    join(root, relativePath, 'index.html')
  ]
  return candidates.find(existsSync) ?? join(root, '404.html')
}

const server = createServer((request, response) => {
  const pathname = request.url?.split('?')[0] ?? '/'
  const file = resolveFile(pathname)
  response.setHeader('Content-Type', contentTypes[extname(file)] ?? 'application/octet-stream')
  createReadStream(file).pipe(response)
}).listen(4174, '127.0.0.1')

const sockets = new Set()
server.on('connection', (socket) => {
  sockets.add(socket)
  socket.once('close', () => sockets.delete(socket))
})

function shutdown() {
  server.close(() => process.exit(0))
  server.closeAllConnections?.()
  sockets.forEach((socket) => socket.destroy())
  setTimeout(() => process.exit(0), 1_000).unref()
}

process.once('SIGINT', shutdown)
process.once('SIGTERM', shutdown)
