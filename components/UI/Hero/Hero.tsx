import { MyModalContext } from '../../../contexts/MyModal.context'
import { IHero } from '../../../interfaces/hero.interface'
import { tokens } from '../../../theme'
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
	useTheme
} from '@mui/material'
import { FC, useContext, useEffect, useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa'

const Hero: FC<{ hero: IHero[] }> = ({ hero }) => {
	const { onOpen } = useContext(MyModalContext)
	const [id, setId] = useState<number>(0)
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	useEffect(() => {
		hero.map((h) => {
			if (h.page) setId(h.page.id)
			return
		})
	}, [hero])
	console.log(id)

	return (
		<Box>
			{hero.length ? (
				hero.map((hero) => (
					<Card key={hero.id} sx={{ border: '1px solid red', width: '400px' }}>
						<Box sx={{ position: 'relative' }}>
							<CardMedia
								component='img'
								height={200}
								image={`${process.env.NEXT_PUBLIC_APP_STATIC}${hero.background}`}
							/>
							{/* <Button
								style={{
									position: 'absolute',
									top: '5px',
									right: '5px',
									background: 'rgba(0, 0, 0, .6)',
									padding: '15px 12px',
									color: '#fff'
								}}
								onClick={() => onOpen('UpdateHeroImage', hero.id)}
							>
								<FaPencilAlt />
							</Button> */}
						</Box>
						<CardContent>
							<Typography variant='h3'>{hero.title}</Typography>
						</CardContent>
						<CardActions>
							<Button
								color='success'
								size='small'
								onClick={() => onOpen('UpdateHero', hero.id)}
							>
								Редактировать
							</Button>
						</CardActions>
					</Card>
				))
			) : (
				<Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
					<span
						style={{ color: `${colors.blueAccent[600]}`, fontSize: '18px' }}
					>
						данных нет
					</span>
					<Button color='success' onClick={() => onOpen('CreateHero', id)}>
						Создать
					</Button>
				</Box>
			)}
		</Box>
	)
}

export default Hero
