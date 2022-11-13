import React, { useContext } from 'react'
import SnackbarContext from '../../contexts/snackbar.context'

// STYLE
import './Notification.css'

const Notification = () => {
  const snackbarCtx = useContext(SnackbarContext)

  return (
    <div className="snackbar__container">
      <div className="snackbar__label">{snackbarCtx.msg}</div>
      <div className="snackbar__dismiss" onClick={snackbarCtx.onClose}>
        &times;
      </div>
    </div>
  )
}

export default Notification