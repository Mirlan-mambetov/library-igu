import React, { useContext } from 'react'
import { Box, IconButton, InputBase, useTheme } from '@mui/material'
import { ColorModeContext, tokens } from '../../theme'

// ICONS
import {
  LightModeOutlined,
  DarkModeOutlined,
  NotificationsOutlined,
  SettingsOutlined,
  PersonOutlined,
  SearchOutlined
} from '@mui/icons-material'


const Topbar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)


  return (
    <Box display="flex" justifyContent="space-between" p={3}>
      {/* Search */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
        width={300}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Поиск" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchOutlined />
        </IconButton>
      </Box>

      {/* LINKS AND ICONS */}
      <Box
        display="flex"
      >
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlined />
          ) : <LightModeOutlined />}
        </IconButton>

        <IconButton>
          <NotificationsOutlined />
        </IconButton>

        <IconButton>
          <SettingsOutlined />
        </IconButton>

        <IconButton>
          <PersonOutlined />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Topbar