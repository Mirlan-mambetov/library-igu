import { Box } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateHero } from '../../../store/hero/actions/hero.action'

// COMPONENTS
import { ButtonComponent, Input } from '../../'
import { activeNotification } from '../../../store/notififcation/notificationSlice'


const HeroForm = () => {
  const dispatch = useDispatch()
  const { updateId } = useSelector(state => state.modal)
  const { success } = useSelector(state => state.hero)
  const [title, setTitle] = useState("")
  const [background, setBackground] = useState(null)
  const data = { updateId, title, background }
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
        onClick={() => {
          dispatch(updateHero(data))
          // dispatch(activeNotification(success.msg))
        }}
      // onClick={() => console.log(data)}
      />
    </Box>
  )
}

export default HeroForm