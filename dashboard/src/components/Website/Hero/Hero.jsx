import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

const Hero = ({ image, title }) => {
  return (
    <Box>
      <Box>
        <img src={image} alt="" />
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