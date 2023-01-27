import { Footer, Navbar } from '../components'
import { FC, useContext, PropsWithChildren } from 'react'
import { PdfViewContext } from '../contexts/Pdf-view.context'
import { useScrollLock } from '../hooks/lockScroll'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	const { lockScroll, unlockScroll } = useScrollLock()

	const { isOpen, handlerOpen } = useContext(PdfViewContext)

	if (isOpen) {
		lockScroll()
	} else {
		unlockScroll()
	}
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
