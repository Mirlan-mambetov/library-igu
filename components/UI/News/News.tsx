import { INews } from '../../../interfaces/news.interface'
import { UpdateFragment } from '../../Form/UpdateFragment/UpdateFragment'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { FC } from 'react'

export const News: FC<{ newses: INews[] }> = ({ newses }) => {
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
						<UpdateFragment fragmentUpdate='UpdateNews' id={news.id} />
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
