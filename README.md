# Easier Console

[![npm version](https://badge.fury.io/js/easierconsole.svg)](https://badge.fury.io/js/easierconsole)
[![npm downloads](https://img.shields.io/npm/dm/easierconsole.svg)](https://www.npmjs.com/package/easierconsole)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)

Essentially `easierconsole` is a drop-in replacement for Node.js' built-in `console` with timestamps and colorful log levels, designed to make development easier and more enjoyable. It's like `console.log` but better.

## Example

<img width="776" height="256" alt="Image" src="https://github.com/user-attachments/assets/6e7b8d53-9945-40db-89a1-b06229453827" />

## Installation

```bash
npm install easierconsole
```

## Quick Start

Replace the global console in your app:

```js
import { console as easierconsole } from 'easierconsole'
global.console = easierconsole

console.info('Server listening on port 3000')
console.error('Something went wrong')
```

Or import and use directly without touching the global:

```js
import { console } from 'easierconsole'

console.debug('Debug message here')
console.info('Some information here')
console.warn('Warning here')
console.error('Error here but still white')
console.fatal('This is in red and exits')
```

## ✨ Features

* **⏰ Timestamps**: Every log message includes a precise timestamp (HH:MM:SS.mmm)
* **🎨 color-coded levels**: Debug (gray), Info (blue), Warn (orange), Error (red), Fatal (red)
* **📦 Object formatting**: color-aware object inspection for clearer debug output
* **💀 Fatal logging**: `console.fatal()` exits the process with status code 1
* **⚡ Zero configuration**: No setup required, just install and import
* **🔄 Full compatibility**: All standard Node.js console methods pass through unchanged
* **📤 Proper streams**: Info/debug to stdout, warn/error/fatal to stderr

## 🎯 What this is

`easierconsole` is a lightweight logging enhancement that makes your existing console statements more informative without requiring you to change your code. It adds visual structure to your logs through:

- **Consistent formatting** with timestamps and color-coded severity levels
- **Better object inspection** that maintains readability in terminal output
- **Proper stream routing** following Node.js conventions (stdout for info, stderr for errors)
- **Process control** with fatal logging that cleanly exits on critical failures

It's designed for developers who want better logs without the complexity of a full logging framework.

## 🚫 What this isn't

`easierconsole` is **not**:

- **🏗️ A full logging framework**: no file outputs, log rotation, or complex configuration
- **📊 Structured logging**: output is human-readable, not machine-parseable JSON
- **🏭 Production logging**: meant for development and simple applications
- **⚙️ Configurable**: colors and format are fixed (by design, for simplicity)
- **🚀 A performance solution**: adds formatting overhead to every log call

If you need structured logs, file outputs, log levels filtering, or high-performance logging, consider libraries like `winston`, `pino`, or `bunyan`.

## 📚 API Reference

**Enhanced Methods** All accept the same arguments as standard `console` methods:

- `console.debug(...args)`<br>
  Debug messages in gray with white "DBG" badge. Perfect for detailed debugging information.

- `console.info(...args)`<br>
  Informational messages in white with blue "INF" badge. Use for general application flow.

- `console.warn(...args)`<br>
  Warning messages in white with orange "WRN" badge. Use for non-critical issues.

- `console.error(...args)`<br>
  Error messages in white with red "ERR" badge. Use for recoverable errors.

- `console.fatal(...args)`<br>
  Fatal messages in red with red "FTL" badge, then exits process with code 1. Use for unrecoverable errors.

**Standard Methods** All other `console` methods (`log`, `table`, `time`, `timeEnd`, `trace`, etc.) work exactly as they do in Node.js.

## 📄 License

Licensed under the **GNU General Public License v3.0 (GPL-3.0)**.

This means you can use, modify, and distribute this software, but any derivative works must also be licensed under GPL-3.0. See the [LICENSE](LICENSE) file for full details.
