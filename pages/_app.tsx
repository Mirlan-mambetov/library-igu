import '../styles/globals.css'
import { ColorModeContext, useMode } from '../theme'
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	const { colorMode, theme } = useMode()

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</ColorModeContext.Provider>
	)
}
