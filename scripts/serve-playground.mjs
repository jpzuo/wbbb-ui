import { createReadStream, existsSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, join, normalize } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(fileURLToPath(new URL('..', import.meta.url)), 'examples', 'playground', 'dist', 'build', 'h5')
const contentTypes = {
  '.css': 'text/css',
  '.html': 'text/html',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp'
}

const server = createServer((request, response) => {
  const requestPath = request.url?.split('?')[0] ?? '/'
  const relativePath = normalize(requestPath === '/' ? 'index.html' : requestPath).replace(/^([/\\])+/, '')
  const filePath = join(root, relativePath)
  const resolvedPath = existsSync(filePath) ? filePath : join(root, 'index.html')

  response.setHeader('Content-Type', contentTypes[extname(resolvedPath)] ?? 'application/octet-stream')
  createReadStream(resolvedPath).pipe(response)
}).listen(4173, '127.0.0.1')
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
