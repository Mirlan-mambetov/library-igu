import { Layout } from '../../../components/Layout/Layout'
import Hero from '../../../components/UI/Hero/Hero'
import { MyModal } from '../../../components/UI/Modal/Modal'
import { pageApi } from '../../../store/api/page/page.api'
import { NextPage } from 'next'

const WebsiteMainPage: NextPage = () => {
	const id = 1
	const { data: page } = pageApi.useFetchOnePageQuery(id)
	console.log(page)
	return (
		<Layout title='Главная страница сайта ИГУ'>
			<MyModal />
			{page?.hero.map(hero => (
				<Hero {...hero} key={hero.id} />
			))}
		</Layout>
	)
}

export default WebsiteMainPage
