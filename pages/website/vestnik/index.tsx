import { Layout } from '../../../components/Layout/Layout'
import { ErrorDisplayed } from '../../../components/UI'
import Hero from '../../../components/UI/Hero/Hero'
import { pageApi } from '../../../store/api/page/page.api'
import { NextPage } from 'next'

const WebsiteVestnikPage: NextPage = () => {
	const id = 29
	const { data: page, error } = pageApi.useFetchOnePageQuery(id)
	console.log(page)
	return (
		<Layout title='Страница вестник'>
			{/* @ts-ignore */}
			<ErrorDisplayed error={error} />
			{/* Hero */}
			{page?.hero.length && <Hero hero={page.hero} />}
		</Layout>
	)
}

export default WebsiteVestnikPage
