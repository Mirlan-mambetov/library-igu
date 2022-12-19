import { Layout } from '../../../Layout/Layout'
import {
	ElibraryCategories,
	ElibraryFileList,
	Hero,
	Title
} from '../../../components'
import {
	IElibraryCategory,
	IElibrarySecondCategory
} from '../../../interfaces/elibrary.interface'
import { elibraryService } from '../../../services/elibrary/elibraryService'
import styles from './books.module.scss'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { FC } from 'react'

interface IBooksPage {
	mainCategories: IElibraryCategory[]
	category: IElibrarySecondCategory
}
const BooksPage: FC<IBooksPage> = ({
	mainCategories,
	category
}): JSX.Element => {
	const totalBooks = category.books.flatMap((l) => l.id).length

	return (
		<Layout>
			<NextSeo
				title={`${
					category ? category.name : 'Электронная библиотека'
				} Электронная библиотека - Научная библиотека ИГУ`}
				description='Электронная библиотека ИГУ Научная библиотека ИГУ'
			/>
			{/* Hero */}
			<Hero
				/* @ts-ignore */
				data={{
					title: category.name,
					infoTitle: 'Всего книг',
					totalArticle: totalBooks
				}}
			/>
			{/* Remainings books */}
			<section className={styles.remaining}>
				<div className='container'>
					<div className={styles.remainignWrapp}>
						<div className='sectionTitle'>
							<Title type='h3'>Недавние в электронной библиотеке</Title>
						</div>
						<div className={styles.books}>
							{/* {BookscardData.map(books => (
                <Bookscard data={books} key={books.id} />
              ))} */}
						</div>
					</div>
				</div>
			</section>
			{/* Content */}
			<section>
				<div className='container'>
					<div className={styles.content}>
						<div className={styles.files}>
							<ElibraryFileList categoryId={category.id} />
						</div>
						<div className={styles.category}>
							<ElibraryCategories
								categoryTitle='Категории'
								data={mainCategories}
								position='row'
								categoryLink='elibrary/category'
							/>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: categories } =
			await elibraryService.fetchAllSecondCategories()
		const paths = categories.map((category) => ({
			params: { id: String(category.id) }
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
		const { data: mainCategories } =
			await elibraryService.fetchAllMainCategories()
		const { data: category } = await elibraryService.fetchSecondCategoryById(
			// @ts-ignore
			+params.id
		)
		return {
			props: {
				mainCategories,
				category
			}
		}
	} catch (e) {
		return {
			props: {
				mainCategories: [] as IElibraryCategory[],
				category: {} as IElibrarySecondCategory
			} as IBooksPage
		}
	}
}

export default BooksPage
