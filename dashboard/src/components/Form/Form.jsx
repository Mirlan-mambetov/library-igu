import React from 'react'
import { Box } from '@mui/system'

// Components
import {
  ButtonComponent,
  Header
} from '../'

const FormComponent = ({ children }) => {
  return (
    <Box
      component="form"
    >
      {children}
      <ButtonComponent
        type="plus"
        content="Создать"
        color="success"
        sx={{ marginTop: "10px" }}
      />
    </Box>
  )
}

export default FormComponent