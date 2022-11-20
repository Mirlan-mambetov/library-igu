import { Navbar } from '../Navbar/Navbar'
import { Sidebar } from '../Sidebar/Sidebar'
import styles from './Layout.module.scss'
import { CssBaseline } from '@mui/material'
import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'

export const Layout: FC<PropsWithChildren<{ title: string }>> = ({
	children,
	title
}): JSX.Element => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<CssBaseline />
			<main className={styles.main}>
				{/* <Sidebar /> */}
				<Sidebar />
				<Navbar />
				<section className={styles.content}>{children}</section>
			</main>
		</>
	)
}
