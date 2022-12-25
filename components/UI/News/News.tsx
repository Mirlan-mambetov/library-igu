import { DialogContext } from '../../../contexts/CompareContext'
import { INews } from '../../../interfaces/news.interface'
import { newsApi } from '../../../store/api/news/news.api'
import { UpdateFragment } from '../../Form/UpdateFragment/UpdateFragment'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { FC, useContext, useEffect } from 'react'

export const News: FC<{ newses: INews[] }> = ({ newses }) => {
	const [deleteNews] = newsApi.useDeleteNewsMutation()

	const deleteHandler = async (id: number) => await deleteNews(id)

	return (
		<Box sx={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
			{newses.map((news) => (
				<Card sx={{ width: '340px' }} key={news.id}>
					<Box sx={{ position: 'relative' }}>
						<CardMedia
							component='img'
							height={150}
							image={`${process.env.NEXT_PUBLIC_APP_STATIC}/${news.image}`}
						/>
						<Box sx={{ display: 'flex', gap: '30px' }}>
							<UpdateFragment fragmentUpdate='UpdateNews' id={news.id} />
							<Button
								sx={{ fontSize: '10px' }}
								color='warning'
								onClick={() => deleteHandler(news.id)}
							>
								Удалить
							</Button>
						</Box>
					</Box>
					<CardContent>
						<Typography variant='h5'>{news.title}</Typography>
						<p
							style={{
								display: '-webkit-box',
								WebkitBoxOrient: 'vertical',
								WebkitLineClamp: '2',
								margin: '10px 0px 10px 0px',
								overflow: 'hidden'
							}}
							title={news.description}
						>
							{news.description}
						</p>
					</CardContent>
				</Card>
			))}
		</Box>
	)
}
