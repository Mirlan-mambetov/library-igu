import { Layout } from '../../Layout/Layout'
import { Button, Hero, Imagebox, Title } from '../../components'
import News from '../../components/News/News'
import { INews } from '../../interfaces/news.interface'
import { newsService } from '../../services/newsService/newsService'
// STYLES
import styles from './news.module.scss'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { FC } from 'react'

interface newsI {
	news: INews
	newses: INews[]
}

const NewsPage: FC<newsI> = ({ news, newses }) => {
	return (
		<Layout>
			<NextSeo
				title={`${news.title} - Научная библиотека ИГУ`}
				description={`Научная библиотека ИГУ Вестник ИГУ им. К. Тыныстанова ${news.title} - ${news.description}`}
			/>
			{/* Hero */}
			<Hero data={{ ...news }} />
			{/* News description */}
			<section className={styles.description}>
				<div className='container'>
					<Imagebox data={{ ...news }} />
				</div>
			</section>
			{/* News cards */}
			<section className={styles.cards}>
				<div className='container'>
					<div className='sectionTitle'>
						<Title type='h3'>Читайте также</Title>
					</div>
					<div className={styles.cardsWrapp}>
						{newses && <News data={newses} />}
					</div>
					<div className={styles.cardsBtn}>
						<Link href={'/news/arhiv'}>
							<a>
								<Button>Архив новостей</Button>
							</a>
						</Link>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: newses } = await newsService.findAllNews()
		const paths = newses.map((news) => ({
			params: {
				id: String(news.id)
			}
		}))
		return {
			paths,
			fallback: false
		}
	} catch (e) {
		return {
			paths: [],
			fallback: false
		}
	}
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		// @ts-ignore
		const { data: news } = await newsService.findNewsById(+params?.id)
		const { data: newses } = await newsService.findNewsOnLimit(3)

		return {
			props: {
				news,
				newses
			}
		}
	} catch (e) {
		return {
			props: {
				news: {} as INews,
				newses: [] as INews[]
			} as newsI
		}
	}
}

export default NewsPage
