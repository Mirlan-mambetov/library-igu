import { Layout } from '../../../components/Layout/Layout'
import { ErrorDisplayed } from '../../../components/UI'
import Hero from '../../../components/UI/Hero/Hero'
import { MyModalContext } from '../../../contexts/MyModal.context'
import { pageApi } from '../../../store/api/page/page.api'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { NextPage } from 'next'
import { useContext } from 'react'

const WebsiteAboutPage: NextPage = () => {
	const id = 33
	const { data: page, error } = pageApi.useFetchOnePageQuery(id)
	const { onOpen } = useContext(MyModalContext)
	console.log(page)
	return (
		<Layout title='Страница О библиотеке'>
			{/* @ts-ignore */}
			<ErrorDisplayed error={error} />
			{page?.hero && <Hero hero={page.hero} />}
		</Layout>
	)
}
export default WebsiteAboutPage
