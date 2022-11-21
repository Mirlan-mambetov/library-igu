import { Layout } from '../../../components/Layout/Layout'
import Hero from '../../../components/UI/Hero/Hero'
import { MyModal } from '../../../components/UI/Modal/Modal'
import { MyModalContext } from '../../../contexts/MyModal.context'
import { pageApi } from '../../../store/api/page/page.api'
import { NextPage } from 'next'
import { useContext } from 'react'

const WebsiteMainPage: NextPage = () => {
	const id = 30
	const { data: page } = pageApi.useFetchOnePageQuery(id)
	const { isOpen } = useContext(MyModalContext)
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
