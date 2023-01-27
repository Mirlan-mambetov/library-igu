import { useCallback } from 'react'
import { noSSR } from 'next/dynamic'
export const useScrollLock = () => {
	const lockScroll = useCallback(() => {
		if (typeof window !== 'undefined') {
			document.body.style.overflow = 'hidden'
		}
	}, [])

	const unlockScroll = useCallback(() => {
		if (typeof window !== 'undefined') {
			document.body.style.overflow = ''
		}
	}, [])

	return {
		lockScroll,
		unlockScroll
	}
}
