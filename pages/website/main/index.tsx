import { Layout } from '../../../components/Layout/Layout'
import { ErrorDisplayed } from '../../../components/UI'
import Hero from '../../../components/UI/Hero/Hero'
import { MyModal } from '../../../components/UI/Modal/Modal'
import { isFetchBaseQueryError } from '../../../helpers/fetchBaseQueryError'
import { pageApi } from '../../../store/api/page/page.api'
import { NextPage } from 'next'

const WebsiteMainPage: NextPage = () => {
	const id = 30
	const { data: page, error } = pageApi.useFetchOnePageQuery(id)
	console.log(page)
	return (
		<Layout title='Главная страница сайта ИГУ'>
			{/* @ts-ignore */}
			<ErrorDisplayed error={error} />
			{page?.hero.length && <Hero hero={page.hero} />}
		</Layout>
	)
}

export default WebsiteMainPage
