import { MyModalContext } from '../../../contexts/MyModal.context'
import { Fade } from './Fade'
import { Box, Modal, Typography } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'
import { FC, useContext, useState } from 'react'

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
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
					<Typography id='spring-modal-title' variant='h6' component='h2'>
						Text in a modal
					</Typography>
					<Typography id='spring-modal-description' sx={{ mt: 2 }}>
						Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
					</Typography>
				</Box>
			</Fade>
		</Modal>
	)
}
