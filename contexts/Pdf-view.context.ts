import { createContext, useState } from 'react'

export const PdfViewContext = createContext({
	isOpen: false,
	file: null,
	handlerOpen: (file: any) => {},
	handlerClose: () => {}
})

export const PdfViewProvider = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [file, setFile] = useState(null)

	const handlerOpen = (file: any) => {
		setIsOpen(true)
		setFile(file)
	}
	const handlerClose = () => {
		setIsOpen(false)
		setFile(null)
	}

	return {
		isOpen,
		file,
		handlerOpen,
		handlerClose
	}
}
