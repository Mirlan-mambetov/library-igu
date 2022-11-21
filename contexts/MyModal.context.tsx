import { createContext, useMemo, useState } from 'react'

export const MyModalContext = createContext({
	isOpen: false,
	onOpen: () => {},
	onClose: () => {}
})

export const MyModalContextProvider = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const onOpen = () => setIsOpen(true)
	const onClose = () => setIsOpen(false)

	return { isOpen, onOpen, onClose }
}
