import { Layout } from '../../../components/Layout/Layout'
import Hero from '../../../components/UI/Hero/Hero'
import { Tabs } from '../../../components/UI/Tabs/Tabs'
import { pageApi } from '../../../store/api/page/page.api'
import { NextPage } from 'next'

const WebsiteRulesPage: NextPage = () => {
	const id = 37
	const { data: page } = pageApi.useFetchOnePageQuery(id)
	return (
		<Layout title='Правила пользования'>
			{/* Hero */}
			{page?.hero && <Hero hero={page.hero} />}
			{/* Tabs */}
			{page?.tabs && <Tabs tabs={page.tabs} />}
		</Layout>
	)
}

export default WebsiteRulesPage
