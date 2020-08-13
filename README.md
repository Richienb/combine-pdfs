# combine-pdfs [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/combine-pdfs/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/combine-pdfs)

Combine multiple PDFs into one.

[![NPM Badge](https://nodei.co/npm/combine-pdfs.png)](https://npmjs.com/package/combine-pdfs)

## Install

```sh
npm install combine-pdfs
```

## Usage

```js
const { promises: fs } = require("fs");
const combinePdfs = require("combine-pdfs");

await fs.writeFile("output.pdf", await combinePdfs([
	await fs.readFile("file.pdf"),
	await fs.readFile("file2.pdf")
]));
```

## API

### combinePdfs(pdfs)

#### pdfs

Type: `Array<string | Uint8Array | ArrayBuffer | Buffer>`

The PDFs to combine.
