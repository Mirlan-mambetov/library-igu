import { Layout } from '../../../Layout/Layout'
import { Hero } from '../../../components'
import News from '../../../components/News/News'
import Paginate from '../../../components/Paginate/Paginate'
import { INews } from '../../../interfaces/news.interface'
import { IITemsPaginate } from '../../../interfaces/paginate.interface'
import { newsApi } from '../../../store/api/news/news.api'
import { pageApi } from '../../../store/api/page/page.api'
// STYLES
import styles from './arhiv.module.scss'
import { GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useState } from 'react'

const NewsArhiv: NextPage = (): JSX.Element => {
	const pageId = 39
	const [page, setPage] = useState(1)

	const { data: newses = {} as IITemsPaginate<INews> } =
		newsApi.useFetchAllNewsWithPaginateQuery({ query: { page, limit: 3 } })

	const { data: onePage } = pageApi.useFetchPageQuery(pageId)

	const paginateHandler = ({ selected }: { selected: number }) => {
		setPage(selected + 1)
		// router.replace(`?page=${selected + 1}`)
	}

	return (
		<Layout>
			<NextSeo
				title={`Архив новостей - Научная библиотека ИГУ`}
				description='Научная библиотека ИГУ Вестник ИГУ им. К. Тыныстанова'
			/>
			{/* Hero */}
			{onePage?.hero.map((hero) => (
				<Hero
					data={{
						...hero,
						totalArticle: newses.meta?.totalItems,
						infoTitle: 'Всего новостей'
					}}
					key={hero.id}
				/>
			))}
			{/* Newses */}
			<section>
				<div className='container'>
					<div className={styles.news}>
						{newses ? (
							<>
								<News data={newses.items} />
							</>
						) : (
							''
						)}
					</div>
					<Paginate
						handler={paginateHandler}
						initialPage={page - 1}
						totalPage={newses.meta ? newses.meta.totalPages : 1}
					/>
				</div>
			</section>
		</Layout>
	)
}

export default NewsArhiv
