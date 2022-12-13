import { Footer, Navbar } from '../components'
import { FC, PropsWithChildren } from 'react'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			{/* Navbar */}
			<Navbar />
			{/* Main content */}
			<main>{children}</main>
			{/* Footer */}
			<Footer />
		</>
	)
}
