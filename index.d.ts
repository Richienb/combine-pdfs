/**
Combine multiple PDFs into one.
@param pdfs The PDFs to combine.
@example
```
const { promises: fs } = require("fs");
const combinePdfs = require("combine-pdfs");

await fs.writeFile("output.pdf", await combinePdfs([
	await fs.readFile("file.pdf"),
	await fs.readFile("file2.pdf")
]));
```
*/
declare function combinePdfs(pdfs: ReadonlyArray<string | Uint8Array | ArrayBuffer | Buffer>): Promise<Uint8Array>

export = combinePdfs
