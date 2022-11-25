import { tokens } from '../../../../theme'
import { CreateFragment } from '../../../Form/CreateFragment/CreateFragment'
import { UpdateFragment } from '../../../Form/UpdateFragment/UpdateFragment'
import { IHeroSubcontentProps } from './Subcontent.props'
import { Box, useTheme } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { FC, useEffect, useState } from 'react'

export const HeroSubContent: FC<IHeroSubcontentProps> = ({ subContent }) => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const [heroId, setHeroId] = useState<number>(0)

	useEffect(() => {
		subContent.map((s) => {
			if (s.hero) setHeroId(s.hero.id)
			return
		})
	}, [subContent])
	console.log(`SUBCONTENT HERO ID: ${heroId}`)

	return (
		<>
			<Card sx={{ width: '100%', padding: '12px', mt: '15px' }}>
				<Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
					<Typography color={colors.blueAccent[400]} variant='subtitle1'>
						Подконтент в HERO
					</Typography>
					<CreateFragment id={heroId} fragmentCreate='CreateHeroSubcontent' />
				</Box>
				<Box sx={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
					{subContent.map((sub) => (
						<Box key={sub.id}>
							<CardContent>
								<Typography variant='h5'>{sub.title}</Typography>
								<Typography variant='h6'>{sub.description}</Typography>
							</CardContent>
							<UpdateFragment
								fragmentUpdate='UpdateHeroSubcontent'
								id={sub.id}
							/>
						</Box>
					))}
				</Box>
			</Card>
		</>
	)
}
