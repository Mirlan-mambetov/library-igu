import { BookscardI } from '../Interfaces/Bookscard.interface'
import { HeroI } from '../Interfaces/Hero.interface'
import { NewsI } from '../Interfaces/News.interface'
import { PartnersI } from '../Interfaces/Partners.interface'
import { withLayout } from '../Layout/WithLayout'
import { Bookscard, Button, Cards, Hero, Tabs, Title } from '../components'
import News from '../components/News/News'
import { INews } from '../interfaces/news.interface'
import { IITemsPaginate } from '../interfaces/paginate.interface'
import { TabsInterface } from '../interfaces/tabs.interface'
import { newsApi } from '../store/api/news/news.api'
import { pageApi } from '../store/api/page/page.api'
// STYLES
import styles from '../styles/Pages/Home.module.scss'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

const Home: FC = (): JSX.Element => {
	const id = 30
	const limit = 3
	const { data: page } = pageApi.useFetchPageQuery(id)
	const { data: newses = {} as IITemsPaginate<INews> } =
		newsApi.useFetchAllNewsQuery({
			query: { page: 1, limit }
		})

	// NEWSES
	const NewsData: NewsI[] = [
		{
			id: 1,
			title: 'Международная конференция библиотекарей СНГ',
			description:
				'В Научной библиотеке ИГУ им.К.Тыныстанова состоялась встреча библиотекарей СНГ в рамках международной конференции на тему: "Культурное и природное наследие стран Содружества: роль и место библиотек", посвященной межгосударственной программе "Каракол - культурная столица Содружества Независимых Государств 2022 года"',
			published: 'Май 2022',
			image:
				'https://res.cloudinary.com/djzubalr7/image/upload/v1665224754/Library-igu/news/news-1_xuprwf.png'
		},
		{
			id: 2,
			title:
				'Министр образования и науки КР в Научной библиотеке ИГУ им.К.Тыныстанова',
			description:
				'17 мая 2022 года Научную библиотеку Иссык-Кульского государственного университета посетил министр образования и науки Кыргызской Республики Бейшеналиев Алмазбек Бейшеналиевич',
			published: 'Июнь 2021',
			image:
				'https://res.cloudinary.com/djzubalr7/image/upload/v1665224751/Library-igu/news/news-2_wewje1.png'
		},
		{
			id: 3,
			title: 'Индия в Кыргызской Республике - выставка искусства и жизни Индии',
			description:
				'19 мая 2021 года состоялось открытие выставки "Индия в Кыргызской Республике - выставка искусства и жизни Индии", приуроченная году культуры Индии в Кыргызстане. После церемонии разрезания ленты, господин посол и ректор зажгли лампу по Индийской традиции. Ректор ИГУ им.К.Тыныстанова Иманбаев Аскар Асангазиевич, в своей приветственной речи поблагодарил господина посла за активное сотрудничество с нашим университетом. В свою очередь Чрезвычайный и Полномочный посол Республики Индия в Кыргызстане господин Алок А.Димри в своей речи отметил важность проведения подобных мероприятий в стенах университетов, так как аура и атмосфера которая царит в учебных заведениях удивительна. Далее состоялось знакомство с экпозицией, где было показано культурное наследие Индии.',
			published: 'Авг 2022',
			image:
				'https://res.cloudinary.com/djzubalr7/image/upload/v1665224746/Library-igu/news/news-3_xpheil.png'
		}
	]
	// Books card
	const BookscardData: BookscardI[] = [
		{
			id: 1,
			image:
				'https://res.cloudinary.com/djzubalr7/image/upload/v1665232900/Library-igu/news/card2_w16gcf.png'
		},
		{
			id: 2,
			image:
				'https://res.cloudinary.com/djzubalr7/image/upload/v1665232904/Library-igu/news/card3_mgwvo1.png'
		},
		{
			id: 3,
			image:
				'https://res.cloudinary.com/djzubalr7/image/upload/v1665232907/Library-igu/news/card1_ymzwfw.png'
		},
		{
			id: 4,
			image:
				'https://res.cloudinary.com/djzubalr7/image/upload/v1665232893/Library-igu/news/card4_ji6esk.png'
		}
	]
	// Tabs data
	const Tabsdata: TabsInterface[] = [
		{
			id: 1,
			title: 'Книжняя литература',
			isLink: [
				{
					id: 1,
					link: 'http://nbisu.moy.su/_ld/20/2008_IGUSHAKITOV2013.pdf',
					name: 'Сентябрь 2022 - PDF'
				},
				{
					id: 2,
					link: 'http://nbisu.moy.su/_ld/20/2008_IGUSHAKITOV2013.pdf',
					name: 'Октябрь 2021 - PDF'
				}
			]
		},
		{
			id: 2,
			title: 'Периодические издания - PDF',
			isLink: [
				{
					id: 1,
					link: 'http://nbisu.moy.su/_ld/20/2008_IGUSHAKITOV2013.pdf',
					name: '2 полугодие 2019 года - PDF'
				},
				{
					id: 2,
					link: 'http://nbisu.moy.su/_ld/20/2008_IGUSHAKITOV2013.pdf',
					name: '1 полугодие 2019 года - PDF'
				}
			]
		}
	]
	// Partners data
	const PartnersData: PartnersI[] = [
		{
			id: 1,
			image:
				'https://res.cloudinary.com/djzubalr7/image/upload/v1665243061/Library-igu/partners/p2_plukjr.png',
			link: 'google.com'
		},
		{
			id: 2,
			image:
				'https://res.cloudinary.com/djzubalr7/image/upload/v1665243062/Library-igu/partners/p1_eajtag.png',
			link: 'google.com'
		},
		{
			id: 3,
			image:
				'https://res.cloudinary.com/djzubalr7/image/upload/v1665243057/Library-igu/partners/p3_d0eaxd.png',
			link: 'google.com'
		}
	]
	return (
		<>
			<NextSeo
				title='Главная - Научная библиотека ИГУ'
				description='Научная библиотека ИГУ'
				additionalMetaTags={[
					{ property: 'og:title', content: 'Научная библиотека ИГУ' }
				]}
			/>
			{/* Hero */}
			{page?.hero && <Hero data={page.hero} />}
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
							{BookscardData.map((books) => (
								<Bookscard key={books.id} data={books} />
							))}
						</div>
						<div className={styles.tabs}>
							{Tabsdata.map((tabs) => (
								<Tabs tabs={tabs} key={tabs.id} />
							))}
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
						{PartnersData.map((partner) => (
							<SwiperSlide key={partner.id} className={styles.partnersSlide}>
								<a href={`https://${partner.link}`} target='_blank'>
									<img src={partner.image} alt={`${partner.id}`} />
								</a>
							</SwiperSlide>
						))}
						<div className={styles.slideProgress}></div>
					</Swiper>
				</div>
			</section>
		</>
	)
}

export default withLayout(Home)
