import { Layout } from '../../../components/Layout/Layout'
import { ErrorDisplayed, Teachers } from '../../../components/UI'
import Hero from '../../../components/UI/Hero/Hero'
import { pageApi } from '../../../store/api/page/page.api'
import { teachersApi } from '../../../store/api/teachers/teachers.api'
import Box from '@mui/material/Box'
import { NextPage } from 'next'

const WebsiteTeachersPage: NextPage = () => {
	const id = 36
	const { data: page, error } = pageApi.useFetchOnePageQuery(id)
	const { data: categories, error: categoriesError } =
		teachersApi.useFetchAllCategoryQuery(null)

	return (
		<Layout title='Труды преподавателей, статьи. Hero'>
			<ErrorDisplayed error={error || categoriesError} />
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
				{/* Hero */}
				{page?.hero.length && <Hero hero={page.hero} />}
				{/* categories */}
				{categories?.length && <Teachers category={categories} />}
			</Box>
		</Layout>
	)
}

export default WebsiteTeachersPage
