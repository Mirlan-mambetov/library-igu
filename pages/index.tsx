import { Layout } from '../Layout/Layout'
import { withLayout } from '../Layout/WithLayout'
import { Bookscard, Button, Hero, Tabs, Title } from '../components'
import News from '../components/News/News'
import { INews } from '../interfaces/News.interface'
import { IArrivalImage } from '../interfaces/arrival.interface'
import { IITemsPaginate } from '../interfaces/paginate.interface'
import { IPartners } from '../interfaces/partners.interface'
import { arrivalApi } from '../store/api/arrival/arrival.api'
import { newsApi } from '../store/api/news/news.api'
import { pageApi } from '../store/api/page/page.api'
import { partnersApi } from '../store/api/partners/partners.api'
// STYLES
import styles from '../styles/Pages/Home.module.scss'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

const Home: FC = (): JSX.Element => {
	// STATIC PAGE ID ... so HARD CODING...
	const id = 1
	const limit = 3
	const { data: page } = pageApi.useFetchPageQuery(id)
	const { data: newses = {} as IITemsPaginate<INews> } =
		newsApi.useFetchAllNewsWithPaginateQuery({
			query: { page: 1, limit }
		})
	const { data: arrivalImages = [] as IArrivalImage[] } =
		arrivalApi.useFetchArrivalImageQuery(null)
	const { data: partners = [] as IPartners[] } =
		partnersApi.useFetchPartnersQuery(null)

	return (
		<Layout>
			<NextSeo
				title={`${page ? page.name : ''} Научная библиотека ИГУ`}
				description='Научная библиотека ИГУ'
				additionalMetaTags={[
					{ property: 'og:title', content: 'Научная библиотека ИГУ' }
				]}
			/>
			{/* Hero */}
			{page?.hero && page.hero.map((h) => <Hero key={h.id} data={{ ...h }} />)}
			{/* Newses */}
			<section className={styles.newses}>
				<div className='container'>
					<div className='sectionTitle'>
						<Title type='h3'>Новости</Title>
					</div>
					<div className={styles.news}>
						{newses && <News data={newses.items} />}
					</div>
					<div className={styles.newsBtn}>
						<Link href={'/news/arhiv'}>
							<a>
								<Button orientation='right'>Архив новостей</Button>
							</a>
						</Link>
					</div>
				</div>
			</section>
			{/* Arrivals */}
			<section className={styles.arrivals}>
				<div className='container'>
					<div className='sectionTitle'>
						<Title type='h3'>новые поступления</Title>
					</div>
					<div className={styles.arrivalsWrapp}>
						<div className={styles.books}>
							{arrivalImages &&
								arrivalImages.map((image) => (
									<Bookscard key={image.id} data={image} />
								))}
						</div>
						<div className={styles.tabs}>
							{page?.tabs &&
								page.tabs.map((tab) => <Tabs tabs={tab} key={tab.id} />)}
						</div>
					</div>
				</div>
			</section>
			{/* Partners */}
			<section className={styles.partners}>
				<div className='container'>
					<div className='sectionTitle'>
						<Title type='h3'>Партнеры библиотеки</Title>
					</div>
					<Swiper
						className={styles.partnersSwiper}
						loop
						slidesPerView={3}
						pagination={{ type: 'progressbar', el: `.${styles.slideProgress}` }}
						autoplay={{
							delay: 2000,
							pauseOnMouseEnter: true,
							disableOnInteraction: false
						}}
						breakpoints={{
							320: {
								slidesPerView: 1.2
							},
							400: {
								slidesPerView: 1.8
							},
							600: {
								slidesPerView: 2.1
							},
							800: {
								slidesPerView: 2.7
							},
							1000: {
								slidesPerView: 3
							}
						}}
					>
						{partners &&
							partners.map((partner) => (
								<SwiperSlide key={partner.id} className={styles.partnersSlide}>
									<a
										href={`https://${partner.link}`}
										target='_blank'
										rel='noreferrer'
									>
										<Image
											src={`${process.env.NEXT_PUBLIC_APP_STATIC}/${partner.image}`}
											alt={`${partner.id}`}
											width={200}
											height={50}
										/>
									</a>
								</SwiperSlide>
							))}
						<div className={styles.slideProgress}></div>
					</Swiper>
				</div>
			</section>
		</Layout>
	)
}

export default Home
