import Logo from '../../public/logo.png'
// STYLES
import styles from './preloader.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { FC } from 'react'

export const Preloader: FC = (): JSX.Element => {
	const router = useRouter()
	const [loading, setLoading] = useState<boolean>(false)
	useEffect(() => {
		const handleStart = () => setLoading(true)
		const handleComplete = () => setTimeout(() => setLoading(false), 1200)
		router.events.on('routeChangeStart', handleStart)
		router.events.on('routeChangeComplete', handleComplete)
		router.events.on('routeChangeError', handleComplete)
		return () => {
			router.events.off('routeChangeStart', handleStart)
			router.events.off('routeChangeComplete', handleComplete)
			router.events.off('routeChangeError', handleComplete)
			router.events.off('hashChangeComplete', handleComplete)
		}
	})
	return (
		<>
			{loading && (
				<div className={styles.preloader}>
					<Image src={Logo} />
					<span>Загрузка страницы...</span>
				</div>
			)}
		</>
	)
}
