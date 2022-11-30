import { IArhivs } from '../../../interfaces/arhivs.interface'
import { tokens } from '../../../theme'
import { CreateFragment } from '../../Form/CreateFragment/CreateFragment'
import { UpdateFragment } from '../../Form/UpdateFragment/UpdateFragment'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

export const Archivs: FC<{ archiv: IArhivs[]; title: string }> = ({
	archiv,
	title
}) => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const [pageId, setPageId] = useState<number>(0)
	let materials = archiv.flatMap((material) => material.materials)

	useEffect(() => {
		archiv.map((a) => {
			if (a.page) setPageId(a.page.id)
			return
		})
	}, [archiv])

	console.log(pageId)

	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ display: 'flex', alignItems: 'baseline', gap: '40px' }}>
				<Typography
					variant='h5'
					sx={{
						color: colors.blueAccent[700],
						display: 'flex',
						gap: '3px',
						flexDirection: 'column'
					}}
				>
					{title}
					<span
						style={{ fontSize: '12px', display: 'block', marginTop: '6px' }}
					>
						Всего архивов: {archiv.length}
					</span>
					<span
						style={{ fontSize: '12px', display: 'block', marginTop: '2px' }}
					>
						Всего материалов: {materials.length}
					</span>
				</Typography>
				<CreateFragment fragmentCreate='CreateArhiv' id={pageId} />
			</Box>
			<Grid
				sx={{ pl: '30px', my: '20px' }}
				container
				rowSpacing={1}
				columnSpacing={{ xs: 1, sm: 2, md: 3 }}
			>
				{archiv.map((item) => (
					<Grid
						item
						xs={3}
						key={item.id}
						sx={{ border: `1px solid ${colors.primary[600]}`, my: '6px' }}
					>
						<Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
							<Link
								href={`/website/vestnik/${item.id}`}
								style={{ color: colors.blueAccent[500] }}
							>
								<Typography variant='subtitle1'>{item.name}</Typography>
							</Link>
							<UpdateFragment fragmentUpdate='UpdateArchiv' id={item.id} />
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}
