import { DialogContext } from '../../../contexts/CompareContext'
import { Fade } from '../Modal/Fade'
import { Modal } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { FC, useContext } from 'react'

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '50%',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4
}
export const AlertComponent: FC = () => {
	const { active, inActiveHandler, confirmDelete } = useContext(DialogContext)
	return (
		<Modal
			aria-labelledby='spring-modal-title'
			aria-describedby='spring-modal-description'
			open={active}
			onClose={inActiveHandler}
			closeAfterTransition
			BackdropProps={{
				timeout: 500
			}}
		>
			<Fade in={active}>
				<Box sx={style}>
					<Typography>Вы уверены что хотите удалить?</Typography>
					<Box sx={{ my: '10px' }}>
						<Button color='warning' onClick={confirmDelete}>
							Да, удалить
						</Button>
						<Button color='success' onClick={inActiveHandler}>
							Нет
						</Button>
					</Box>
				</Box>
			</Fade>
		</Modal>
	)
}
