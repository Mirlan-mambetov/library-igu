import { Layout } from '../../../Layout/Layout'
import { TeacherCategories, Hero, TeachersFileList } from '../../../components'
import { ITeachersCategory } from '../../../interfaces/teachers.interface'
import { teacherService } from '../../../services/teacherService/teacherService'
// STYLES
import styles from './category.module.scss'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { FC } from 'react'

interface ICategoryPage {
	category: ITeachersCategory
	categories: ITeachersCategory[]
}

const CategoryPage: FC<ICategoryPage> = ({
	category,
	categories
}): JSX.Element => {
	const totalWorks = category.works.flatMap((w) => w.id).length
	return (
		<Layout>
			<NextSeo
				title='Труды преподавателей - Научная библиотека ИГУ'
				description='Научная библиотека ИГУ'
			/>
			{/* Hero */}
			<Hero
				// @ts-ignore
				data={{
					title: category.name,
					infoTitle: 'Всего работ',
					totalArticle: totalWorks
				}}
			/>
			<section className={styles.content}>
				<div className='container'>
					<div className={styles.wrapp}>
						<div className={styles.files}>
							<TeachersFileList categoryId={category.id} />
						</div>
						<div className={styles.categories}>
							{categories && (
								<TeacherCategories
									category={categories}
									categoryLink='teachers'
									position='fixed'
									categoryTitle='Категории'
								/>
							)}
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: categories } = await teacherService.fetchAllCategories()
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
		const { data: categories } = await teacherService.fetchAllCategories()
		// @ts-ignore
		const { data: category } = await teacherService.fetchCategoyById(+params.id)
		return {
			props: {
				category,
				categories
			}
		}
	} catch (e) {
		return {
			props: {
				category: {} as ITeachersCategory,
				categories: [] as ITeachersCategory[]
			} as ICategoryPage
		}
	}
}

export default CategoryPage
