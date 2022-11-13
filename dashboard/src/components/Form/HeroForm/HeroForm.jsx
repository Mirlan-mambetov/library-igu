import React, { useState } from 'react'
import { updateHero } from '../../../store/hero/actions/hero-actions'
import { Box } from '@mui/material'
import { fetchPages } from '../../../store/pages/actions/pageActions'
// import { activeNotification } from '../../../store/notififcation/notificationSlice'
import { useDispatch, useSelector } from 'react-redux'

// COMPONENTS
import { ButtonComponent, Input } from '../../'
import { closeModal } from '../../../store/modal/reducers/modalSlice'


const HeroForm = () => {
  const dispatch = useDispatch()
  const { id } = useSelector(state => state.modal)
  const { errors, success } = useSelector(state => state.hero)
  const [title, setTitle] = useState("")
  const [background, setBackground] = useState(null)

  const formHandler = () => {
    const data = { id, title, background }
    dispatch(updateHero(data))
    dispatch(fetchPages())
    dispatch(closeModal())
    console.log(data)
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