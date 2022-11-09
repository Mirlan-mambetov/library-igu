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
      sx={SideBarSX}
      height="100vh"
      backgroundColor={colors.primary[600]}
      style={{
        position: "sticky",
        top: "0"
      }}
    >
      <Sidebar
        backgroundColor={colors.primary[600]}
        collapsedWidth="80px"
        width="320px"
        style={{
          border: 'none'
        }}
      >
        <Menu >
          <MenuApp />
        </Menu>
      </Sidebar>
    </Box>
  )
}

export default SidebarApp