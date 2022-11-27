import { Layout } from '../../../components/Layout/Layout'
import { ErrorDisplayed, Journal } from '../../../components/UI'
import Hero from '../../../components/UI/Hero/Hero'
import { pageApi } from '../../../store/api/page/page.api'
import Box from '@mui/material/Box'
import { NextPage } from 'next'

const WebsiteVestnikPage: NextPage = () => {
	const id = 29
	const { data: page, error } = pageApi.useFetchOnePageQuery(id)
	console.log(page)
	return (
		<Layout title='Страница вестник'>
			{/* @ts-ignore */}
			<ErrorDisplayed error={error} />
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
				{/* Hero */}
				{page?.hero.length && <Hero hero={page.hero} />}
				{/* Journal */}
				{page?.journal.length && <Journal journal={page.journal} />}
			</Box>
		</Layout>
	)
}

export default WebsiteVestnikPage
