import { MyModalContext } from '../../../contexts/MyModal.context'
import { IJournal } from '../../../interfaces/journal.interface'
import { tokens } from '../../../theme'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { FC, useContext } from 'react'

export const Journal: FC<{ journal: IJournal[] }> = ({ journal }) => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { updateId, onOpen } = useContext(MyModalContext)
	return (
		<>
			{journal.length &&
				journal.map((j) => (
					<Card sx={{ width: '100%', padding: '20px' }} key={j.id}>
						<CardContent>
							<Typography color={colors.blueAccent[400]} variant='subtitle1'>
								Главное описание журанала
							</Typography>
							{j.journalHead?.map((jH) => (
								<Box key={jH.id} sx={{ my: '20px' }}>
									<Typography variant='h5'>{jH.title}</Typography>
									{jH.items.map((item) => (
										<Box
											key={item.id}
											sx={{
												my: '6px',
												display: 'flex',
												gap: '10px',
												alignItems: 'center',
												fontSize: '14px',
												color: `${colors.greenAccent[400]}`
											}}
										>
											<span>{item.title}</span>
											<span>{item.description}</span>
											<Button color='success' sx={{ fontSize: '10px' }}>
												Редактировать
											</Button>
										</Box>
									))}
								</Box>
							))}
							<Box
								sx={{
									position: 'relative',
									display: 'flex',
									alignItems: 'center',
									mt: '40px'
								}}
							>
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										gap: '12px',
										maxWidth: '50%'
									}}
								>
									<Typography variant='h5'>{j.title}</Typography>
									<Typography variant='h6'>{j.subtitle}</Typography>
									<Typography variant='subtitle2'>{j.description}</Typography>
								</Box>
								<Box
									sx={{
										ml: '50px'
									}}
								>
									<CardMedia
										component='img'
										height={320}
										image={`${process.env.NEXT_PUBLIC_APP_STATIC}${j.image}`}
									/>
								</Box>
								<Button
									color='success'
									sx={{
										fontSize: '10px',
										position: 'absolute',
										top: '10px',
										right: '20px'
									}}
									onClick={() => onOpen('UpdateJournal', j.id)}
								>
									Редактировать
								</Button>
							</Box>
						</CardContent>
					</Card>
				))}
		</>
	)
}
