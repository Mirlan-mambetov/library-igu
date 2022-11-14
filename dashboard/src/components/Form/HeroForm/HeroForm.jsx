import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Box } from '@mui/material'
// import SnackbarContext from '../../../contexts/snackbar.context'

// COMPONENTS
import { ButtonComponent, Input } from '../../'
import { useActions } from '../../../hooks/redux'


const HeroForm = () => {
  const { updateHero, fetchPages } = useActions()
  // const snackbarCtx = useContext(SnackbarContext)
  const { id } = useSelector(state => state.modal)
  // const { errors, success } = useSelector(state => state.hero)
  const [title, setTitle] = useState("")
  const [background, setBackground] = useState(null)

  const formHandler = () => {
    const data = { id, title, background }
    updateHero(data)
    fetchPages()
    // dispatch(closeModal())
  }

  return (
    <Box sx={{ display: "flex", gap: "12px", flexDirection: "column" }}>
      <Input
        type="file"
        onChange={(e) => setBackground(e.target.files[0])}
      />
      <Input
        label="Заголовок"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
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

export default HeroForm