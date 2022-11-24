import {
	MyModalContext,
	MyModalContextProvider
} from '../contexts/MyModal.context'
import { store } from '../store'
import '../styles/globals.css'
import { ColorModeContext, useMode } from '../theme'
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
	const { colorMode, theme } = useMode()
	const modalProvider = MyModalContextProvider()

	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<ColorModeContext.Provider value={colorMode}>
					<ThemeProvider theme={theme}>
						<MyModalContext.Provider value={{ ...modalProvider }}>
							<Component {...pageProps} />
						</MyModalContext.Provider>
					</ThemeProvider>
				</ColorModeContext.Provider>
			</Provider>
		</QueryClientProvider>
	)
}
