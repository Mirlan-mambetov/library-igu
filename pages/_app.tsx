import { Preloader } from '../components'
import { store } from '../store'
import '../styles/global.scss'
import { NextSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { Swiper, Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const MyApp = ({ Component, pageProps }: AppProps) => {
	Swiper.use([Autoplay, Pagination])
	return (
		<Provider store={store}>
			<NextSeo
				defaultTitle='Научная библиотека ИГУ'
				additionalLinkTags={[
					{
						rel: 'icon',
						href: './favicon-32x32.png',
						sizes: '32x32'
					},
					{
						rel: 'icon',
						href: './favicon-16x16.png',
						sizes: '16x16'
					},
					{
						rel: 'apple-touch-icon',
						href: './apple-touch-icon.png',
						sizes: '180x180'
					},
					{
						rel: 'mask-icon',
						href: './safari-pinned-tab.svg',
						color: '#5bbad5'
					}
				]}
			/>
			<Preloader /> <Component {...pageProps} />
		</Provider>
	)
}

export default MyApp
