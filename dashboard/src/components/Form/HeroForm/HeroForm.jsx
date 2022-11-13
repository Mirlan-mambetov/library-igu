import React, { useContext, useState, useEffect } from 'react'
import { updateHero } from '../../../store/hero/actions/hero-actions'
import { useDispatch, useSelector } from 'react-redux'
import SnackbarContext from '../../../contexts/snackbar.context'
import { closeModal } from '../../../store/modal/reducers/modalSlice'
import { Box } from '@mui/material'
import { fetchPages } from '../../../store/pages/actions/pageActions'

// COMPONENTS
import { ButtonComponent, Input } from '../../'


const HeroForm = () => {
  const snackbarCtx = useContext(SnackbarContext)
  const dispatch = useDispatch()
  const { id } = useSelector(state => state.modal)
  const { errors, success } = useSelector(state => state.hero)
  const [title, setTitle] = useState("")
  const [background, setBackground] = useState(null)

  const formHandler = () => {
    const data = { id, title, background }
    dispatch(updateHero(data))
    dispatch(fetchPages())
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