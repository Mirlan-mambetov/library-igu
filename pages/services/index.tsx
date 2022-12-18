import { withLayout } from '../../Layout/WithLayout'
import { Hero, Imagebox, Tabs, Title } from '../../components'
import { imageCardApi } from '../../store/api/ImageCard/imageCard.api'
import { pageApi } from '../../store/api/page/page.api'
// STYLES
import styles from './services.module.scss'
import { NextSeo } from 'next-seo'
import { FC } from 'react'

const Services: FC = (): JSX.Element => {
	const pageId = 3
	const { data: page } = pageApi.useFetchPageQuery(pageId)
	const { data: imageCards } = imageCardApi.useFetchAllImageCardsQuery(null)

	return (
		<>
			<NextSeo
				title='Сервисы - Научная библиотека ИГУ'
				description='сервисы - Научная библиотека ИГУ, научная библиотека'
			/>
			{/* Hero section */}
			{page?.hero && page.hero.map((h) => <Hero data={h} key={h.id} />)}
			{/* Services */}
			<div className='container'>
				<div className={styles.services}>
					{imageCards &&
						imageCards.map((card) => <Imagebox data={card} key={card.id} />)}
				</div>
				{/* Other services */}
				<div className='sectionTitle'>
					<Title type='h3'>Другие сервисы</Title>
				</div>
				<div className={styles.otherServices}>
					{page?.tabs &&
						page.tabs.map((tab) => <Tabs tabs={tab} key={tab.id} />)}
				</div>
			</div>
		</>
	)
}

export default withLayout(Services)
