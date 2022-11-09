import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'


const TabsComponent = ({ title, link = [] }) => {
  return (
    <Box
      sx={{ width: "100%" }}
    >
      <Typography>
        {title}
      </Typography>
      <Box display="flex" flexDirection="column" gap="12px">
        {link.map(l => (
          <Link key={l.id} to={l.link}>{l.name}</Link>
        ))}
      </Box>
    </Box>
  )
}

export default TabsComponent