import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

const Hero = ({
  background,
  title }) => {
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
      <Typography
        variant='h1'
      >
        {title}
      </Typography>
    </Box>
  )
}

export default Hero