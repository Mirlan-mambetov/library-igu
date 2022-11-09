import React from 'react'
import { Box } from '@mui/system'

const Form = ({ children }) => {
  return (
    <Box
      component="form"
    >
      {children}
    </Box>
  )
}

export default Form