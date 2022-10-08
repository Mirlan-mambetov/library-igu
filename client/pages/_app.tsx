import { NextSeo } from 'next-seo'
import type { AppProps } from 'next/app'

// STYLES
import '../styles/global.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextSeo defaultTitle='Научная библиотека ИГУ' />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
