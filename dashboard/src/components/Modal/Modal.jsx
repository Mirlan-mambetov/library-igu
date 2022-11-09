import React from 'react'
import Input from '../Input/Input'
import { Fade, Modal } from '@mui/material'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../store/modal/reducers/modalSlice'
import { Box } from '@mui/system'
import { style } from './styles'


const Modalscreate = ({ open }) => {
  const dispatch = useDispatch()
  const handleClose = () => dispatch(closeModal())
  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      // BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Input />
        </Box>
      </Fade>
    </Modal>
  )
}

export default Modalscreate