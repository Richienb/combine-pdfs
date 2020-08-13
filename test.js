const test = require("ava")
const parsePdf = require("pdf-parse")
const { promises: fs } = require("fs")
const combinePdfs = require(".")

test("main", async t => {
	const fixture = await fs.readFile("fixture.pdf")

	const { text } = await parsePdf(await combinePdfs([fixture, fixture]))

	t.is(text, `

Dummy PDF file

Dummy PDF file`)
})
