import { Layout } from '../../../components/Layout/Layout'
import ElibraryCategory from '../../../components/UI/Elibrary/ElibraryCategory/ElibraryCategory'
import {
	IElibrary,
	IElibraryCategory
} from '../../../interfaces/elibrary.interface'
import { elibraryApi } from '../../../store/api/elibrary/elibrary.api'
import { tokens } from '../../../theme'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const WebsiteElibraryOnePage: NextPage = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { query } = useRouter()
	if (!query.id) return null
	const { data: category = {} as Pick<IElibrary, 'id' | 'name'> } =
		elibraryApi.useFetchMainCategoryByIdQuery(+query.id, {
			skip: !query.id
		})
	const { data: categories = [] as IElibraryCategory[] } =
		elibraryApi.useFetchCategoryByMainCategoryQuery(+query.id, {
			skip: !query.id
		})

	return (
		<Layout title={`Категория ${category.name}`}>
			<Box color={colors.primary[600]} sx={{ my: '20px' }}>
				<Typography variant='h4'>{category.name}</Typography>
				<Typography sx={{ mt: '5px' }} variant='subtitle2'>
					Всего категорий: {categories.length}
				</Typography>
			</Box>
			{!categories ? (
				<span>загрузка категории..</span>
			) : (
				<ElibraryCategory categories={categories} id={+query.id} />
			)}
		</Layout>
	)
}

export default WebsiteElibraryOnePage
