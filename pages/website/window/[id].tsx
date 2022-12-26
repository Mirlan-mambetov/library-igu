import { Layout } from '../../../components/Layout/Layout'
import { CategoryList } from '../../../components/UI'
import { IWindowCategory } from '../../../interfaces/window.interface'
import { windowApi } from '../../../store/api/window/window.api'
import { useRouter } from 'next/router'

const WebsiteWindowCategoryPage = () => {
	const { query } = useRouter()
	if (!query.id) return null
	const { data: category = [] as IWindowCategory[] } =
		windowApi.useFetchWindowCategoryByMainCategoryQuery(+query.id)

	return (
		<Layout title='Единое окно'>
			{category && <CategoryList data={category} categoryId={+query.id} />}
		</Layout>
	)
}
export default WebsiteWindowCategoryPage
