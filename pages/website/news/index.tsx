import { CreateFragment } from '../../../components/Form/CreateFragment/CreateFragment'
import { Layout } from '../../../components/Layout/Layout'
import { News } from '../../../components/UI'
import { INews } from '../../../interfaces/news.interface'
import { INewsPaginationI, newsApi } from '../../../store/api/news/news.api'
import { tokens } from '../../../theme'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { NextPage } from 'next'
import { useState, ChangeEvent } from 'react'

const NewsPage: NextPage = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const [page, setPage] = useState(1)
	const { data: news = {} as INewsPaginationI } = newsApi.useFetchAllNewsQuery({
		query: { page }
	})

	const paginateHandler = async (e: ChangeEvent<unknown>, page: number) => {
		setPage(page)
	}
	console.log(news.items)

	return (
		<Layout title='Новости'>
			<Box>
				<Box
					sx={{
						color: colors.blueAccent[600],
						display: 'flex',
						alignItems: 'baseline',
						gap: '20px'
					}}
				>
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
						<Typography variant='h5'>Новости</Typography>
						<Typography variant='subtitle2'>
							Всего новостей: {news.meta?.totalItems}
						</Typography>
					</Box>
					<CreateFragment fragmentCreate='CreateNews' />
				</Box>
				<Box sx={{ my: '20px' }}>
					{news.items?.length && <News newses={news.items} />}
				</Box>
			</Box>
			<Box sx={{ my: '20px' }}>
				<Stack spacing={2} sx={{ py: '10px' }} bgcolor={colors.grey[400]}>
					<Pagination
						defaultPage={1}
						count={news.meta?.totalPages}
						color='secondary'
						page={page}
						onChange={paginateHandler}
						showFirstButton
						showLastButton
					/>
				</Stack>
			</Box>
		</Layout>
	)
}

export default NewsPage
