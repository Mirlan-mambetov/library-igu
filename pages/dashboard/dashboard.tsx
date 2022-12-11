import { Layout } from '../../components/Layout/Layout'
import { MyModalContext } from '../../contexts/MyModal.context'
import { pageApi } from '../../store/api/page/page.api'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import { FC, useContext } from 'react'

export const Dashboard: FC = () => {
	const { data: pages } = pageApi.useFetchAllPagesQuery(null)
	console.log(pages)
	const { onOpen } = useContext(MyModalContext)
	return (
		<Layout title='Главная. Панель администратора'>
			<Box
				sx={{
					display: 'flex'
				}}
			>
				<Card sx={{ maxWidth: 345, width: '100%' }}>
					<CardContent sx={{ display: 'flex', gap: '10px' }}>
						<Typography variant='h6'>Количество страниц сайта</Typography>
						<span>{pages?.length}</span>
					</CardContent>
					<Button
						color='success'
						sx={{ fontSize: '10px' }}
						onClick={() => onOpen('CreatePage')}
						disabled
					>
						Создать страницу
					</Button>
				</Card>
			</Box>
		</Layout>
	)
}
