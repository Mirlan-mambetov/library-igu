import { Layout } from '../../components/Layout/Layout'
import { pageApi } from '../../store/api/page/page.api'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { FC } from 'react'

export const Dashboard: FC = () => {
	const { data: pages } = pageApi.useFetchAllPagesQuery(null)
	console.log(pages)
	return (
		<Layout title='Главная. Панель администратора'>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					'& > :not(style)': {
						m: 1,
						width: 128,
						height: 128
					}
				}}
			>
				<Card sx={{ maxWidth: 345 }}>
					<CardContent sx={{ display: 'flex', gap: '10px' }}>
						<Typography variant='h6'>Количество страниц сайта</Typography>
						<span>{pages?.length}</span>
					</CardContent>
				</Card>
			</Box>
		</Layout>
	)
}
