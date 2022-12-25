import { Layout } from '../../../components/Layout/Layout'
import Elibrary from '../../../components/UI/Elibrary/Elibrary'
import Hero from '../../../components/UI/Hero/Hero'
import { IElibrary } from '../../../interfaces/elibrary.interface'
import { elibraryApi } from '../../../store/api/elibrary/elibrary.api'
import { pageApi } from '../../../store/api/page/page.api'
import { NextPage } from 'next'

const WebsiteElibraryPage: NextPage = () => {
	const id = 6
	const { data: page } = pageApi.useFetchOnePageQuery(id)
	const { data: mainCategories = [] as IElibrary[] } =
		elibraryApi.useFetchCategoriesQuery(null)

	return (
		<Layout title='Электронная библиотека'>
			{/* Hero */}
			{page?.hero && <Hero hero={page.hero} />}
			{/* Caegories */}
			{mainCategories && <Elibrary data={mainCategories} />}
		</Layout>
	)
}

export default WebsiteElibraryPage
