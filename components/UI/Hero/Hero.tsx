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

const Hero: FC<IHero> = ({ id, background, title }) => {
	const { onOpen } = useContext(MyModalContext)
	return (
		<Box>
			<Card>
				<CardMedia component='img' height={200} image={background} />
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
