import { Layout } from '../../../components/Layout/Layout'
import { Archivs, ErrorDisplayed, Journal } from '../../../components/UI'
import Hero from '../../../components/UI/Hero/Hero'
import { Tabs } from '../../../components/UI/Tabs/Tabs'
import { pageApi } from '../../../store/api/page/page.api'
import Box from '@mui/material/Box'
import { NextPage } from 'next'

const WebsiteVestnikPage: NextPage = () => {
	const id = 29
	const { data: page, error } = pageApi.useFetchOnePageQuery(id)

	return (
		<Layout title='Страница вестник'>
			{/* @ts-ignore */}
			<ErrorDisplayed error={error} />
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
				{/* Hero */}
				{page?.hero.length && <Hero hero={page.hero} />}
				{/* Journal */}
				{page?.journal.length && <Journal journal={page.journal} />}
				{page?.tabs.length && (
					<Tabs tabs={page.tabs} title='Информация о журнале в табах' />
				)}
				{page?.vestnik.length && (
					<Archivs archiv={page.vestnik} title='Архивы вестника' />
				)}
			</Box>
		</Layout>
	)
}

export default WebsiteVestnikPage
