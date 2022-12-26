import { IWindowCategory } from '../../../interfaces/window.interface'
import { tokens } from '../../../theme'
import { CreateFragment } from '../../Form/CreateFragment/CreateFragment'
import { UpdateFragment } from '../../Form/UpdateFragment/UpdateFragment'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { FC } from 'react'

export const CategoryList: FC<{
	data: IWindowCategory[]
	categoryId: number
}> = ({ data, categoryId }) => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	return (
		<Box
			sx={{
				display: 'flex',
				gap: '20px',
				flexDirection: 'column',
				py: '20px'
			}}
		>
			<CreateFragment fragmentCreate='CreateWindowCategory' id={categoryId} />
			{data.map((category) => (
				<Box
					color={colors.primary[700]}
					sx={{
						display: 'flex',
						gap: '20px',
						alignItems: 'center',
						border: `1px solid ${colors.redAccent[100]}`,
						p: '15px 5px'
					}}
				>
					<Typography
						sx={{
							my: '10px',
							display: 'flex',
							gap: '20px'
						}}
						variant='subtitle1'
					>
						<span style={{ fontSize: '10px' }}>название:</span>
						<Typography variant='h5'>{category.name}</Typography>
					</Typography>
					<Link
						style={{ fontSize: '14px', textDecoration: 'underline' }}
						href={`${process.env.NEXT_PUBLIC_APP_STATIC}${category.file}`}
						target={'_blank'}
					>
						файл
					</Link>
					<Box
						sx={{
							display: 'flex',
							gap: '10px',
							border: `1px solid ${colors.redAccent[100]}`
						}}
					>
						<UpdateFragment
							fragmentUpdate='UpdateWindowCategory'
							id={category.id}
						/>
						<Button sx={{ fontSize: '10px' }} color='warning'>
							Удалить
						</Button>
					</Box>
				</Box>
			))}
		</Box>
	)
}
