import React from 'react'
import TextField from '@mui/material/TextField'

const Input = ({ ...props }) => {
  return (
    <TextField
      {...props}
      sx={{ width: "100%" }}
    />
  )
}

export default Input