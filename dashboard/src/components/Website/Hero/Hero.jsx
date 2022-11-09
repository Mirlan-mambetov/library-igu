import React from 'react'
import { Typography, useTheme } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Box } from '@mui/system'
import { openModal, updateContent } from '../../../store/modal/reducers/modalSlice'
import { tokens } from '../../../theme'


// COMPONENTS
import {
  ButtonComponent
} from '../../'

const Hero = ({
  background,
  title }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const dispatch = useDispatch()
  return (
    <Box sx={{ display: "flex", gap: "10px" }}>
      <Box
        position="relative"
        sx={{
          display: "flex",
          width: "45%"
        }}>
        <img
          style={{ width: "100%", zIndex: "1" }}
          src={!background && "https://res.cloudinary.com/djzubalr7/image/upload/v1665219599/Library-igu/background-default_z6g7u1.png"} alt="" />
        <Box
          position="absolute"
          top="10px"
          right="10px"
          zIndex={2}
          bgcolor={colors.primary[300]}
        >
          <ButtonComponent
            type="update"
            onClick={() => {
              dispatch(openModal())
              dispatch(updateContent("updateHeroImage"))
            }}
          >
            Редактировать
          </ButtonComponent>
        </Box>
      </Box>
      <Box width="45%">
        <Typography
          display="flex"
          alignItems="center"
          gap="6px"
          variant='h3'
        >
          {title}
          <ButtonComponent
            type="update"
          >
            Редактировать
          </ButtonComponent>
        </Typography>
        <span style={{ marginTop: "10px", color: `${colors.primary[300]}` }}>Заголовок на главном экране</span>
      </Box>
    </Box>
  )
}

export default Hero