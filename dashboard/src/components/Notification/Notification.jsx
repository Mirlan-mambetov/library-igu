import React from 'react'
import { Snackbar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { noneActiveNotification } from '../../store/notififcation/notificationSlice'

const Notification = () => {
  const dispatch = useDispatch()
  const { isActive, message } = useSelector(state => state.notification)
  // const handleClose = () => {
  //   dispatch(noneActiveNotification())
  // }
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={isActive}
      // onClose={handleClose}
      message={message}
    />
  )
}

export default Notification