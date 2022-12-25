import { IArrival } from '../../../../interfaces/arrival.interface'
import { tokens } from '../../../../theme'
import { UpdateFragment } from '../../../Form/UpdateFragment/UpdateFragment'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { FC } from 'react'

export const ArrivalImages: FC<{ images: IArrival[] }> = ({ images }) => {
	console.log(images)

	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	return (
		<Box sx={{ my: '20px' }} color={colors.blueAccent[700]}>
			<Typography sx={{ my: '10px' }} variant='h5'>
				Картинки новых поступлений
			</Typography>
			<Typography variant='subtitle1'>Всего: {images.length}</Typography>
			<Typography sx={{ mb: '20px' }} variant='subtitle1'>
				Максимально можно добавить: 4
			</Typography>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-around',
					flexWrap: 'wrap'
				}}
			>
				{images.map((block) => (
					<Box key={block.id}>
						<Image
							width={130}
							height={200}
							src={`${process.env.NEXT_PUBLIC_APP_STATIC}${block.image}`}
							alt={block.image}
							priority
						/>
						<UpdateFragment fragmentUpdate='UpdateArrivalImage' id={block.id} />
					</Box>
				))}
			</Box>
		</Box>
	)
}
