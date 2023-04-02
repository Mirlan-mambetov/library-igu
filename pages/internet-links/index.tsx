import { GetServerSideProps, NextPage } from 'next'
import { Layout } from '../../Layout/Layout'
import { NextSeo } from 'next-seo'
import { internetLinkService } from '../../services/internet-links/internet-links-sevice'
import { IInternetLinkCategory } from '../../interfaces/Internet-link-interface'
import { Hero } from '../../components'
import { IPage } from '../../interfaces/page.interface'
import { pageApi } from '../../store/api/page/page.api'
import styles from './internet-links.module.scss'

interface IInternetProps {
	categories: IInternetLinkCategory[]
}
const InternetLinksPage: NextPage<IInternetProps> = ({ categories }) => {
	const id = 10
	const { data: page = {} as IPage, isLoading } = pageApi.useFetchPageQuery(id)

	return (
		<Layout>
			<NextSeo
				title='Ссылки интернет - Научная библиотека ИГУ'
				description='Ссылки интернет, университет им.К.Тыныстанова, иссык-куль'
			/>
			{/* Hero */}
			{page?.hero &&
				page.hero.map(hero => (
					<Hero
						key={hero.id}
						// @ts-ignore
						data={{
							background: hero.background,
							title: hero.title,
							infoTitle: 'Всего категорий',
							totalArticle: categories?.length
						}}
					/>
				))}
			{!categories ? (
				<span>Данных нет..</span>
			) : (
				<div className='container'>
					<div className={styles.category}>
						{categories.map(category => (
							<a key={category.id} href={`/internet-links/${category.id}`}>
								{category.name}
								<span className={styles.category_helper}>
									всего ссылок в категории: {category.categories.length}
								</span>
							</a>
						))}
					</div>
				</div>
			)}
		</Layout>
	)
}

export default InternetLinksPage

export const getServerSideProps: GetServerSideProps = async () => {
	try {
		const { data: categories } = await internetLinkService.findAllCategories()
		return {
			props: {
				categories
			}
		}
	} catch (err) {
		return {
			props: {
				categories: {} as IInternetLinkCategory[]
			},
			notFound: true
		}
	}
}
