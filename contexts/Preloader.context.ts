import { createContext, useState } from 'react'

export const PreloaderContext = createContext({
	isLoading: false,
	setLoading: () => {}
})

export const PreloaderProvider = () => {
	const [isLoading, setIsLoading] = useState(false)

	const loading = () => {
		setIsLoading(true)
	}
	const stopLoading = () => {
		setIsLoading(false)
	}

	return {
		isLoading,
		loading,
		stopLoading
	}
}
