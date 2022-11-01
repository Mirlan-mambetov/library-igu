import React, { useContext } from 'react'
import { Box, IconButton, InputBase, useTheme } from '@mui/material'
import { ColorModeContext, tokens } from '../../theme'
import { useProSidebar } from 'react-pro-sidebar'

// ICONS
import {
  LightModeOutlined,
  DarkModeOutlined,
  NotificationsOutlined,
  SettingsOutlined,
  PersonOutlined,
  SearchOutlined,
  MenuOutlined
} from '@mui/icons-material'


const Topbar = () => {
  const { collapseSidebar } = useProSidebar()
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)


  return (
    <Box display="flex" justifyContent="space-between" p={3}>
      <Box display="flex" gap={4}>
        {/* Menu Btn */}
        <IconButton onClick={() => collapseSidebar()}>
          <MenuOutlined />
        </IconButton>
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