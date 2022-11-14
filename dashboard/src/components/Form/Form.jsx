import React from 'react'
import { useTheme } from '@mui/material'
import { tokens } from '../../theme'
import { Box } from '@mui/system'

// Components
// import {
//   ButtonComponent,
//   Header
// } from '../'

const FormComponent = ({ children }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box
      component="form"
      color={colors.blueAccent[400]}
    >
      {children}

    </Box>
  )
}

export default FormComponent