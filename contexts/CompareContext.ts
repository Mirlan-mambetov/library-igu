import { createContext, useState } from 'react'

export const DialogContext = createContext({
	active: false,
	deleted: false,
	deletedId: 0,
	activeHandler: (id: number) => {},
	inActiveHandler: () => {},
	confirmDelete: () => {}
})

export const DialogContextProvider = () => {
	const [active, setActive] = useState<boolean>(false)
	const [deleted, setDeleted] = useState<boolean>(false)
	const [deletedId, setDeletedId] = useState<number>(0)

	const activeHandler = (id: number) => {
		setActive(true)
		setDeletedId(id)
	}

	const inActiveHandler = () => {
		setActive(false)
		setDeleted(false)
		setDeletedId(0)
	}

	const confirmDelete = () => {
		setActive(false)
		setDeleted(true)
	}

	return {
		active,
		deleted,
		deletedId,
		activeHandler,
		inActiveHandler,
		confirmDelete
	}
}
