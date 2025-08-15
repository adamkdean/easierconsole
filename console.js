// Copyright (C) 2025 Adam K Dean <adamkdean@googlemail.com>
// Use of this source code is governed by the GPL-3.0
// license that can be found in the LICENSE file.

import chalk from 'chalk'
import util from 'node:util'

// capture native console so we don't recurse if users overwrite global.console
const nativeConsole = globalThis.console

// build a passthrough object with all native console props/methods bound correctly
const passthrough = {}
for (const key of Reflect.ownKeys(nativeConsole)) {
  const val = nativeConsole[key]
  passthrough[key] = typeof val === 'function' ? val.bind(nativeConsole) : val
}

// formatting config (including bronze #CD7F32 in place of an orange)
const LEVELS = {
  debug: { code: 'DBG', badge: chalk.bgWhite.black, msg: chalk.gray, out: 'log' },
  info:  { code: 'INF', badge: chalk.bgBlue.white,  msg: chalk.white, out: 'log' },
  warn:  { code: 'WRN', badge: chalk.bgHex('#CD7F32').white, msg: chalk.white, out: 'error' },
  error: { code: 'ERR', badge: chalk.bgRed.white,   msg: chalk.white, out: 'error' },
  fatal: { code: 'FTL', badge: chalk.bgRed.white,   msg: chalk.red,   out: 'error' }
}

const INSPECT = { depth: null, colors: true, maxArrayLength: null, breakLength: 120 }
const pad = (n, s = 2) => String(n).padStart(s, '0')
const timestamp = () => {
  const d = new Date()
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}.${pad(d.getMilliseconds(), 3)}`
}

const formatArgs = (args, colorize) =>
  args.map(a => typeof a === 'string' ? colorize(a) : colorize(util.inspect(a, INSPECT)))

const emit = (level, args) => {
  const { code, badge, msg, out } = LEVELS[level]
  const time = chalk.gray(timestamp())
  const label = badge(` ${code} `)
  const parts = formatArgs(args, msg)
  // log -> stdout, error -> stderr, matching Node's semantics
  nativeConsole[out](time, label, ...parts)
  if (level === 'fatal') process.exit(1)
}

// our overrides (everything else passes through unchanged)
function debug(...args) { emit('debug', args) }
function info(...args)  { emit('info', args) }
function warn(...args)  { emit('warn', args) }
function error(...args) { emit('error', args) }
function fatal(...args) { emit('fatal', args) }

export const console = {
  ...passthrough,
  debug,
  info,
  warn,
  error,
  fatal
}
