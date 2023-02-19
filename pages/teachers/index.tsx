import { withLayout } from '../../Layout/WithLayout'
import { TeacherCategories, Hero, Title, TeachersFiles } from '../../components'
import {
	ITeachersCategory,
	ITeachersWorks
} from '../../interfaces/teachers.interface'
import { pageApi } from '../../store/api/page/page.api'
import { teachersApi } from '../../store/api/teachers/teachers.api'
import styles from './teachers.module.scss'
import { NextSeo } from 'next-seo'
import { FC } from 'react'

const TeachersPage: FC = (): JSX.Element => {
	const pageId = 5
	const limit = 4
	const { data: page } = pageApi.useFetchPageQuery(pageId)
	const { data: categories = [] as ITeachersCategory[] } =
		teachersApi.useFetchAllTeacherCategoryQuery(null)
	const { data: works = [] as ITeachersWorks[] } =
		teachersApi.useFetchTeachersWorksLimitQuery({ limit })

	return (
		<>
			<NextSeo
				title='Труды преподавателей - Научная библиотека ИГУ'
				description='Научная библиотека ИГУ'
			/>
			{/* Hero */}
			{page?.hero && page.hero.map((h) => <Hero data={h} key={h.id} />)}
			{/* Categories */}
			<section className={styles.categories}>
				<div className='container'>
					<div className='sectionTitle'>
						<Title type='h3'>Категории</Title>
					</div>
					<TeacherCategories category={categories} categoryLink='teachers' />
				</div>
			</section>
			<section className={styles.remainings}>
				<div className='container'>
					<div className='sectionTitle'>
						<Title type='h3'>Недавние</Title>
					</div>
					<div className={styles.files}>
						{works &&
							works.map((work) => <TeachersFiles {...work} key={work.id} />)}
					</div>
				</div>
			</section>
		</>
	)
}

export default withLayout(TeachersPage)
