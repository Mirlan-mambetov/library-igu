import { Layout } from '../../../components/Layout/Layout'
import { ArrivalImages, ErrorDisplayed } from '../../../components/UI'
import Hero from '../../../components/UI/Hero/Hero'
import { Tabs } from '../../../components/UI/Tabs/Tabs'
import { arrivalApi } from '../../../store/api/arrival/arrival.api'
import { pageApi } from '../../../store/api/page/page.api'
import { NextPage } from 'next'

const WebsiteMainPage: NextPage = () => {
	const id = 30
	const { data: page, error } = pageApi.useFetchOnePageQuery(id)
	const { data: arrivalImages } = arrivalApi.useFetchAllArrivalImagesQuery(null)
	console.log(page)
	console.log(arrivalImages)
	return (
		<Layout title='Главная страница сайта ИГУ'>
			{/* @ts-ignore */}
			<ErrorDisplayed error={error} />
			{page?.hero.length && <Hero hero={page.hero} />}
			{page?.tabs.length && (
				<Tabs tabs={page.tabs} title='Табы в новых поступлений' />
			)}
			{arrivalImages?.length && <ArrivalImages images={arrivalImages} />}
		</Layout>
	)
}

export default WebsiteMainPage
