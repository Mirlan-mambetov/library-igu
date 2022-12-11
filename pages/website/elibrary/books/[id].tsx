import { Layout } from '../../../../components/Layout/Layout'
import BooksList from '../../../../components/UI/Elibrary/BooksList/BooksList'
import { IElibraryCategory } from '../../../../interfaces/elibrary.interface'
import { elibraryApi } from '../../../../store/api/elibrary/elibrary.api'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const WebsiteElibraryCategoryPage: NextPage = () => {
	const { query } = useRouter()

	if (!query.id) return null

	const { data: category = {} as Pick<IElibraryCategory, 'name' | 'id'> } =
		elibraryApi.useFetchCategoryByIdQuery(+query.id, { skip: !query.id })

	return (
		<Layout title={`Категория ${category.name}`}>
			<BooksList category={category} />
		</Layout>
	)
}

export default WebsiteElibraryCategoryPage
