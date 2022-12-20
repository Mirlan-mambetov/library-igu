import { createContext, useState } from 'react'

export const CompareContext = createContext({
	isCompare: false,
	deleted: false,
	deletedId: 0,
	compareHandler: () => {},
	clearCompare: () => {},
	deleteHandler: () => {},
	deletedHandler: (id: number) => {}
})

export const CompareProvider = () => {
	const [isCompare, setCompare] = useState<boolean>(false)
	const [deleted, setDeleted] = useState<boolean>(false)
	const [deletedId, setDeletedId] = useState<number>(0)

	const compareHandler = () => {
		setCompare(true)
	}

	const clearCompare = () => {
		setCompare(false)
		setDeleted(false)
		setDeletedId(0)
	}

	const deleteHandler = () => {
		setDeleted(true)
	}

	const deletedHandler = (id: number) => {
		setDeletedId(id)
	}

	return {
		deletedId,
		deletedHandler,
		isCompare,
		deleted,
		compareHandler,
		clearCompare,
		deleteHandler
	}
}
