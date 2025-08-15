**easierconsole** is a drop-in replacement for Node.js’ built-in `console` with timestamps and colourful log levels.
It’s a simple, zero-config upgrade that makes your logs more readable without changing how you write them.

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

## Colour Scheme

* **Timestamp** → grey
* **Log level badge** → white text on a coloured background
  * `DBG` → white background, black text
  * `INF` → blue background
  * `WRN` → orange background (`#CD7F32`)
  * `ERR` → red background
  * `FTL` → red background (terminates process)
* **Message** →
  * grey for debug
  * white for info/warn/error
  * red for fatal

## Features

* Works with everything `console.log` accepts: strings, numbers, objects, arrays, errors, etc.
* Colour-aware object formatting for clearer debug output.
* Fatal logging (`console.fatal`) exits the process with status code `1`.
* No configuration or setup required — just install and import.
* Full passthrough of standard Node.js console methods (`console.log`, `console.table`, `console.time`, etc.).

## License

GPL-3.0
