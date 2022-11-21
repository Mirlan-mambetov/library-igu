import { createContext, useMemo, useState } from 'react'

export const MyModalContext = createContext({
	isOpen: false,
	updateName: '',
	updateId: 0,
	onOpen: (value: string, id: number) => {},
	onClose: () => {}
})

export const MyModalContextProvider = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [updateName, setUpdateName] = useState<string>('')
	const [updateId, setUpdateId] = useState<number>(0)

	const onOpen = (value: string, id: number) => {
		setIsOpen(true)
		setUpdateName(value)
		setUpdateId(id)
	}
	const onClose = () => {
		setIsOpen(false)
		setUpdateId(0)
		setUpdateName('')
	}

	return { isOpen, updateName, updateId, onOpen, onClose }
}
