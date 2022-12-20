import { MyModalContext } from '../../../contexts/MyModal.context'
import { Form } from '../../Form/Form'
import { Fade } from './Fade'
import { Box, Modal } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'
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

export const MyModal: FC = () => {
	const { isOpen, onClose } = useContext(MyModalContext)

	return (
		<Modal
			aria-labelledby='spring-modal-title'
			aria-describedby='spring-modal-description'
			open={isOpen}
			onClose={onClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500
			}}
		>
			<Fade in={isOpen}>
				<Box sx={style}>
					<Form />
				</Box>
			</Fade>
		</Modal>
	)
}
