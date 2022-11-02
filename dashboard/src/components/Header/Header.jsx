import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'

const Header = ({ title, subtitle }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box mb={"30px"} mt={"40px"}>
      <Typography
        variant='h3'
        sx={{ mb: "5px" }}
        fontWeight="bold"
        color={colors.grey[100]}
      >
        {title}
      </Typography>
      <Typography
        variant='h6'
        color={colors.greenAccent[400]}
        sx={{ maxWidth: "650px" }}
      >
        {subtitle}
      </Typography>
    </Box>
  )
}

export default Header