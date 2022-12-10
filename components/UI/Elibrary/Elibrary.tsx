import { IElibrary } from '../../../interfaces/elibrary.interface'
import { tokens } from '../../../theme'
import { UpdateFragment } from '../../Form/UpdateFragment/UpdateFragment'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { FC } from 'react'

const Elibrary: FC<{ data: IElibrary[] }> = ({ data }) => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	return (
		<Box
			sx={{ width: '100%', py: '20px', my: '20px' }}
			color={colors.greenAccent[700]}
		>
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				{data.map((category) => (
					<Grid item xs={3} key={category.id}>
						<Image
							src={`${process.env.NEXT_PUBLIC_APP_STATIC}/${category.image}`}
							width={200}
							height={90}
							alt={'image'}
						/>
						<Typography variant='h5'>{category.name}</Typography>
						<Typography variant='subtitle2' sx={{ my: '4px' }}>
							всего категорий: {category.secondCategory.length}
						</Typography>
						<UpdateFragment fragmentUpdate='UpdateElibrary' id={category.id} />
					</Grid>
				))}
			</Grid>
		</Box>
	)
}

export default Elibrary
