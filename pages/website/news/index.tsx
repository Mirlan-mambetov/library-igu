import { CreateFragment } from '../../../components/Form/CreateFragment/CreateFragment'
import { Layout } from '../../../components/Layout/Layout'
import { News } from '../../../components/UI'
import { INews } from '../../../interfaces/news.interface'
import { newsApi } from '../../../store/api/news/news.api'
import { tokens } from '../../../theme'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { NextPage } from 'next'

const NewsPage: NextPage = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { data: news = [] as INews[] } = newsApi.useFetchAllNewsQuery(null)
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
							Всего новостей: {news.length}
						</Typography>
					</Box>
					<CreateFragment fragmentCreate='CreateNews' />
				</Box>
				<Box sx={{ my: '20px' }}>
					<News newses={news} />
				</Box>
			</Box>
		</Layout>
	)
}

export default NewsPage
