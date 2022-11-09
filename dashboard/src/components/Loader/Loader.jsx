import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => {
  return (
    <Box sx={{ display: 'flex', position: "fixed", top: "0", left: "0", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", zIndex: 999 }}>
      <CircularProgress />
    </Box>
  )
}

export default Loader