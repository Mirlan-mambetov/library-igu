import { IHero } from '../../../interfaces/hero.interface'
import { tokens } from '../../../theme'
import { CreateFragment } from '../../Form/CreateFragment/CreateFragment'
import { UpdateFragment } from '../../Form/UpdateFragment/UpdateFragment'
import { HeroSubContent } from './Subcontent/Subcontent'
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Typography,
	useTheme
} from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa'

const Hero: FC<{ hero: IHero[] }> = ({ hero }) => {
	const [pageId, setPageId] = useState<number>(0)
	const [heroId, setHeroId] = useState<number>(0)
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	useEffect(() => {
		hero.map((h) => {
			setHeroId(h.id)
			if (h.page) setPageId(h.page.id)
			return
		})
	}, [hero])
	console.log(`Page ID: ${pageId}`)
	console.log(`Hero ID: ${heroId}`)

	return (
		<Box>
			{hero.length ? (
				hero.map((hero) => (
					<Box key={hero.id}>
						<Card sx={{ width: '400px' }}>
							<Box sx={{ position: 'relative' }}>
								<CardMedia
									component='img'
									height={200}
									image={`${process.env.NEXT_PUBLIC_APP_STATIC}${hero.background}`}
								/>
							</Box>
							<CardContent>
								<Typography variant='h3'>{hero.title}</Typography>
							</CardContent>
							{/* UPDATE BUTTON */}
							<UpdateFragment fragmentUpdate='UpdateHero' id={hero.id} />
						</Card>
						{hero.subcontent?.length ? (
							<HeroSubContent subContent={hero.subcontent} />
						) : null}
					</Box>
				))
			) : (
				<CreateFragment id={pageId} fragmentCreate='UpdateHero' />
			)}
		</Box>
	)
}

export default Hero
