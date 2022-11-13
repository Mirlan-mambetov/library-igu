import React from 'react'
import { Fade, Modal } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../store/modal/reducers/modalSlice'
import { Box } from '@mui/system'
import { style } from './styles'

// COMPONENTS
import {
  UpdateComponent,
  CreateComponent
} from '../'

const Modalscreate = ({ open }) => {
  const dispatch = useDispatch()
  const { update } = useSelector(state => state.modal)
  const handleClose = () => dispatch(closeModal())
  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
    >
      <Fade in={open}>
        <Box sx={style}>
          {update ? <UpdateComponent /> : <CreateComponent />}
        </Box>
      </Fade>
    </Modal>
  )
}

export default Modalscreate