import React from 'react'
import { Sidebar, Menu } from 'react-pro-sidebar'
import { Box, useTheme } from '@mui/material'
import { tokens } from '../../theme'


// COMPONENTS
import {
  MenuApp
} from '../../components'

// STYLES
import { SideBarSX } from '../../utils/sidebar.style'

const SidebarApp = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box
      style={{ display: 'flex', height: '100%' }}
      sx={SideBarSX}
    >
      <Sidebar
        backgroundColor={colors.primary[600]}
        collapsedWidth="80px"
        style={{ border: 'none' }}
      >
        <Menu >
          <MenuApp />
        </Menu>
      </Sidebar>
    </Box>
  )
}

export default SidebarApp