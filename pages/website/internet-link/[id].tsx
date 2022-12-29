import { Layout } from '../../../components/Layout/Layout'
import { InternetLinkCategories } from '../../../components/UI/Internet/CategoryList'
import { internetLinkApi } from '../../../store/api/internetLink/internetLink.api'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const WebsiteInternetLinkCategoryPage: NextPage = () => {
	const { query } = useRouter()
	if (!query.id) return null
	const { data: linkCategories } =
		internetLinkApi.useFetchCategoriesByMainCategoryQuery(+query.id)
	console.log(linkCategories)

	return (
		<Layout title='Ссылки интернет - категории'>
			{linkCategories && (
				<InternetLinkCategories categoryId={+query.id} data={linkCategories} />
			)}
		</Layout>
	)
}
export default WebsiteInternetLinkCategoryPage
