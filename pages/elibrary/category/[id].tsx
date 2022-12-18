import { Layout } from '../../../Layout/Layout'
import {
	ElibraryCategories,
	ElibrarySecondCategories,
	Hero
} from '../../../components'
import { IElibraryCategory } from '../../../interfaces/elibrary.interface'
import { elibraryService } from '../../../services/elibrary/elibraryService'
import { elibraryApi } from '../../../store/api/elibrary/elibrary.api'
// STYLES
import styles from './category.module.scss'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { FC } from 'react'

interface ICategory {
	categories: IElibraryCategory[]
	category: IElibraryCategory
}

const Category: FC<ICategory> = ({ categories, category }): JSX.Element => {
	const { data: secondCategories } =
		elibraryApi.useFetchCategoryByMainCategoryQuery(category.id)

	return (
		<Layout>
			<NextSeo
				title={`${
					category ? category.name : 'Электронная библиотека ИГУ'
				} - Научная библиотека ИГУ`}
				description='Электронная библиотека ИГУ Научная библиотека ИГУ'
			/>
			{/* Hero */}
			<Hero
				// @ts-ignore
				data={{
					title: category.name,
					background: category.image
				}}
			/>
			{/* Content */}
			<section className={styles.content}>
				<div className='container'>
					<div className={styles.contentWrapp}>
						<div className={styles.category}>
							{secondCategories && (
								<ElibrarySecondCategories data={secondCategories} />
							)}
						</div>
						<div className={styles.category}>
							<ElibraryCategories
								categoryTitle='Категории'
								data={categories}
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
		const { data: categories } = await elibraryService.fetchAllMainCategories()
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
		const { data: categories } = await elibraryService.fetchAllMainCategories()
		const { data: category } = await elibraryService.fetchMainCategoryById(
			// @ts-ignore
			+params.id
		)
		return {
			props: {
				categories,
				category
			}
		}
	} catch (e) {
		return {
			props: {
				categories: [] as IElibraryCategory[],
				category: {} as IElibraryCategory
			} as ICategory
		}
	}
}

export default Category
