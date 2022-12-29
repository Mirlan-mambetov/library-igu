import { IInternetLinkCategory } from '../../../interfaces/internetLink.interface'
import { internetLinkApi } from '../../../store/api/internetLink/internetLink.api'
import { tokens } from '../../../theme'
import { CreateFragment } from '../../Form/CreateFragment/CreateFragment'
import { UpdateFragment } from '../../Form/UpdateFragment/UpdateFragment'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { FC } from 'react'

export const InternetLinkCategories: FC<{
	data: IInternetLinkCategory[]
	categoryId: number
}> = ({ categoryId, data }) => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	const [deleteCategory] = internetLinkApi.useDeleteLinkCategoryMutation()
	return (
		<Box
			sx={{
				display: 'flex',
				gap: '20px',
				flexDirection: 'column',
				py: '20px',
				maxWidth: '70%'
			}}
		>
			<CreateFragment fragmentCreate='CreateInternetCategory' id={categoryId} />
			{data.map((category) => (
				<Box
					key={category.id}
					color={colors.primary[700]}
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						gap: '20px',
						alignItems: 'center',
						border: `1px solid ${colors.redAccent[100]}`,
						p: '15px 5px'
					}}
				>
					<Box sx={{ my: '10px' }}>
						<Typography
							sx={{
								my: '10px',
								display: 'flex',
								gap: '20px'
							}}
							variant='subtitle1'
						>
							<span style={{ fontSize: '10px' }}>название:</span>
							{category.name}
						</Typography>
						<Typography
							sx={{
								my: '10px',
								display: 'flex',
								gap: '20px'
							}}
							variant='subtitle1'
						>
							<span style={{ fontSize: '10px' }}>описание:</span>
							{category.description}
						</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							gap: '10px',
							border: `1px solid ${colors.redAccent[100]}`
						}}
					>
						<UpdateFragment
							fragmentUpdate='UpdateInternetCategory'
							id={category.id}
						/>
						<Button
							sx={{ fontSize: '10px' }}
							color='warning'
							onClick={() => deleteCategory(category.id)}
						>
							Удалить
						</Button>
					</Box>
				</Box>
			))}
		</Box>
	)
}
