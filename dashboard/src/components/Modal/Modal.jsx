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

const Modalscreate = ({ open, content = "create" }) => {
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
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          {/* <Input /> */}
          {
            update ? <UpdateComponent /> : <CreateComponent />
          }
        </Box>
      </Fade>
    </Modal>
  )
}

export default Modalscreate