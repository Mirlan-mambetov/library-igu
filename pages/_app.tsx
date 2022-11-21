import {
	MyModalContext,
	MyModalContextProvider
} from '../contexts/MyModal.context'
import { store } from '../store'
import '../styles/globals.css'
import { ColorModeContext, useMode } from '../theme'
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
	const { colorMode, theme } = useMode()
	const { isOpen, onOpen, onClose } = MyModalContextProvider()

	return (
		<Provider store={store}>
			<ColorModeContext.Provider value={colorMode}>
				<ThemeProvider theme={theme}>
					<MyModalContext.Provider value={{ isOpen, onOpen, onClose }}>
						<Component {...pageProps} />
					</MyModalContext.Provider>
				</ThemeProvider>
			</ColorModeContext.Provider>
		</Provider>
	)
}
