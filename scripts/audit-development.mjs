import { spawnSync } from 'node:child_process'
import { appendFileSync } from 'node:fs'

const npmCli = process.env.npm_execpath
if (!npmCli) {
  throw new Error('npm_execpath is required to run the development dependency audit.')
}

const result = spawnSync(process.execPath, [npmCli, 'audit', '--json', '--cache', '.npm-cache'], {
  cwd: process.cwd(),
  encoding: 'utf8'
})

if (result.error) {
  throw result.error
}

const output = `${result.stdout}\n${result.stderr}`
const jsonStart = output.indexOf('{')
if (jsonStart < 0) {
  throw new Error(`npm audit did not return JSON:\n${output}`)
}

const report = JSON.parse(output.slice(jsonStart))
const vulnerabilities = Object.values(report.vulnerabilities ?? {})
  .filter((vulnerability) => vulnerability.severity === 'high' || vulnerability.severity === 'critical')

const dcloudRoots = new Set([
  '@dcloudio/uni-cli-shared',
  '@intlify/core-base',
  '@intlify/message-compiler',
  '@intlify/message-resolver',
  '@intlify/runtime',
  '@intlify/vue-devtools',
  'express',
  'jpeg-js',
  'path-to-regexp',
  'ws'
])

const blocked = vulnerabilities.filter((vulnerability) => dcloudRoots.has(vulnerability.name))
const reviewable = vulnerabilities.filter((vulnerability) => !dcloudRoots.has(vulnerability.name) && vulnerability.fixAvailable)
const unresolved = vulnerabilities.filter((vulnerability) => !dcloudRoots.has(vulnerability.name) && !vulnerability.fixAvailable)
const counts = report.metadata?.vulnerabilities ?? {}

const lines = [
  `Development audit: ${counts.critical ?? 0} critical, ${counts.high ?? 0} high, ${counts.total ?? 0} total.`,
  `Compatibility-blocked by the current uni-app alpha chain (${blocked.length}): ${blocked.map((item) => item.name).join(', ') || 'none'}.`,
  `Reviewable outside the pinned chain (${reviewable.length}): ${reviewable.map((item) => item.name).join(', ') || 'none'}.`,
  `No safe upstream fix reported (${unresolved.length}): ${unresolved.map((item) => item.name).join(', ') || 'none'}.`,
  'This is a development-only report. Production dependency audit remains the release gate; do not use npm audit fix --force with the alpha toolchain.'
]

console.log(lines.join('\n'))

if (process.env.GITHUB_STEP_SUMMARY) {
  appendFileSync(process.env.GITHUB_STEP_SUMMARY, `## Development dependency audit\n\n${lines.map((line) => `- ${line}`).join('\n')}\n`)
}
