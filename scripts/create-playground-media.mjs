import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { deflateSync } from 'node:zlib'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const output = join(root, 'examples', 'playground', 'src', 'static', 'media')
mkdirSync(output, { recursive: true })

function chunk(type, data) {
  const buffer = Buffer.alloc(12 + data.length)
  buffer.writeUInt32BE(data.length, 0)
  buffer.write(type, 4, 4, 'ascii')
  data.copy(buffer, 8)
  let crc = 0xffffffff
  for (const byte of buffer.subarray(4, 8 + data.length)) {
    crc ^= byte
    for (let index = 0; index < 8; index += 1) crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1))
  }
  buffer.writeUInt32BE((crc ^ 0xffffffff) >>> 0, 8 + data.length)
  return buffer
}

function writePng(name, width, height, pixel) {
  const raw = Buffer.alloc((width * 4 + 1) * height)
  for (let y = 0; y < height; y += 1) {
    raw[y * (width * 4 + 1)] = 0
    for (let x = 0; x < width; x += 1) {
      const [r, g, b, a] = pixel(x, y, width, height)
      const offset = y * (width * 4 + 1) + 1 + x * 4
      raw[offset] = r
      raw[offset + 1] = g
      raw[offset + 2] = b
      raw[offset + 3] = a
    }
  }
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
  const header = Buffer.alloc(13)
  header.writeUInt32BE(width, 0); header.writeUInt32BE(height, 4); header[8] = 8; header[9] = 6
  writeFileSync(join(output, name), Buffer.concat([signature, chunk('IHDR', header), chunk('IDAT', deflateSync(raw)), chunk('IEND', Buffer.alloc(0))]))
}

function cover(base, accent) {
  return (x, y, width, height) => {
    const wave = Math.sin((x + y) / 26) * 8
    const mix = y / height
    const shape = (x - width * 0.72) ** 2 + (y - height * 0.38) ** 2 < (height * 0.26) ** 2
    return shape ? [...accent, 255] : [Math.round(base[0] + mix * wave), Math.round(base[1] + mix * wave), Math.round(base[2] + mix * wave), 255]
  }
}

function avatar(background, skin, hair) {
  return (x, y, width, height) => {
    const cx = width / 2; const cy = height / 2
    const head = (x - cx) ** 2 + (y - height * 0.42) ** 2 < (width * 0.25) ** 2
    const body = (x - cx) ** 2 / (width * 0.38) ** 2 + (y - height * 0.95) ** 2 / (height * 0.38) ** 2 < 1
    const fringe = head && y < height * 0.34
    return fringe ? [...hair, 255] : head ? [...skin, 255] : body ? [...hair, 255] : [...background, 255]
  }
}

writePng('cover-blue.png', 720, 420, cover([24, 57, 104], [75, 143, 213]))
writePng('cover-green.png', 720, 420, cover([20, 104, 79], [90, 204, 158]))
writePng('cover-warm.png', 720, 420, cover([158, 93, 32], [245, 184, 77]))
writePng('avatar-blue.png', 240, 240, avatar([214, 230, 250], [238, 190, 157], [39, 71, 113]))
writePng('avatar-green.png', 240, 240, avatar([218, 242, 230], [192, 132, 96], [51, 79, 55]))
