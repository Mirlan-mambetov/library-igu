import React from 'react'
import { Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import { tokens } from '../../../theme'

const Hero = ({
  background,
  title }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box sx={{ display: "flex", gap: "10px" }}>
      <Box sx={{
        display: "flex",
        width: "45%"
      }}>
        <img
          style={{ width: "100%" }}
          src="https://res.cloudinary.com/djzubalr7/image/upload/v1665219599/Library-igu/background-default_z6g7u1.png" alt="" />
      </Box>
      <Box>
        <Typography
          variant='h3'
        >
          {title}
        </Typography>
        <span style={{ marginTop: "10px", color: `${colors.primary[300]}` }}>Заголовок на главном экране</span>
      </Box>

    </Box>
  )
}

export default Hero