import { createContext, useState } from 'react'

export const MyModalContext = createContext({
	isOpen: false,
	updateName: '',
	updateId: 0,
	onOpen: (value: string, id?: number) => {},
	onClose: () => {}
})

export const MyModalContextProvider = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [updateName, setUpdateName] = useState<string>('')
	const [updateId, setUpdateId] = useState<number>(0)

	const onOpen = (value: string, id?: number) => {
		setIsOpen(true)
		setUpdateName(value)
		if (id) setUpdateId(id)
	}
	const onClose = () => {
		setUpdateName('')
		setUpdateId(0)
		setIsOpen(false)
	}

	return { isOpen, updateName, updateId, onOpen, onClose }
}
