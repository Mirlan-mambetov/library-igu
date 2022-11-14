import React, { useState } from 'react'
import { Box } from '@mui/material'
import { useActions } from '../../../hooks/redux'
import { useSelector } from 'react-redux'

// COMPONENTS
import {
  ButtonComponent, Input
} from '../../'

const BookscardForm = () => {
  const { UpdateBooksCard, fetchPages } = useActions()
  const [image, setImage] = useState(null)
  const { id } = useSelector(state => state.modal)

  const formHandler = () => {
    const data = { id, image }
    UpdateBooksCard(data)
    fetchPages()
  }

  return (
    <Box sx={{ display: "flex", gap: "12px", flexDirection: "column" }}>
      <Input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <ButtonComponent
        type="plus"
        color="success"
        content="Обновить"
        sx={{ marginTop: "10px" }}
        onClick={formHandler}
      />
    </Box>
  )
}

export default BookscardForm