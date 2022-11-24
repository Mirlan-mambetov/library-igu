import { MyModalContext } from '../../../contexts/MyModal.context'
import { IHero } from '../../../interfaces/hero.interface'
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography
} from '@mui/material'
import { FC, useContext } from 'react'
import { FaPencilAlt } from 'react-icons/fa'

const Hero: FC<IHero> = ({ id, background, title }) => {
	const { onOpen } = useContext(MyModalContext)
	return (
		<Box>
			<Card>
				<Box sx={{ position: 'relative' }}>
					<CardMedia
						component='img'
						height={200}
						image={`${process.env.NEXT_PUBLIC_APP_STATIC}${background}`}
					/>
					<Button
						style={{
							position: 'absolute',
							top: '5px',
							right: '5px',
							background: 'rgba(0, 0, 0, .6)',
							padding: '15px 12px',
							color: '#fff'
						}}
						onClick={() => onOpen('UpdateHeroImage', id)}
					>
						<FaPencilAlt />
					</Button>
				</Box>
				<CardContent>
					<Typography variant='h3'>{title}</Typography>
				</CardContent>
				<CardActions>
					<Button
						color='success'
						size='small'
						onClick={() => onOpen('UpdateHero', id)}
					>
						Редактировать
					</Button>
				</CardActions>
			</Card>
		</Box>
	)
}

export default Hero
