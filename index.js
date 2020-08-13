"use strict"

const { PDFDocument } = require("pdf-lib")

module.exports = async pdfs => {
	const result = await PDFDocument.create()

	for await (const pdf of pdfs) {
		const newPdf = await PDFDocument.load(pdf)
		for await (const page of await result.copyPages(newPdf, newPdf.getPageIndices())) {
			result.addPage(page)
		}
	}

	return result.save()
}
