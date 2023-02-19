import { Footer, Navbar, PdfViewer } from '../components'
import { FC, useContext, PropsWithChildren } from 'react'
import { PdfViewContext } from '../contexts/Pdf-view.context'
import { useScrollLock } from '../hooks/lockScroll'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	const { lockScroll, unlockScroll } = useScrollLock()
	const { isOpen } = useContext(PdfViewContext)

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
			{/* PDF VIEWER */}
			{isOpen && <PdfViewer/>}
			<main>{children}</main>
			{/* Footer */}
			<Footer />
		</>
	)
}
