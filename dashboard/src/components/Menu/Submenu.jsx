import { ListOutlined, PagesOutlined } from '@mui/icons-material'
import { Box } from '@mui/system'
import React from 'react'
import { SubMenu } from 'react-pro-sidebar'
import MenuList from './Menu'

const Submenu = ({ selected, title, to, icon, setSelected, label }) => {
  return (
    <SubMenu
      label={label}
      icon={<PagesOutlined />}
    >
      <Box
        sx={{ pl: "12px" }}
      >
        <MenuList
          title={title}
          to={to}
          selected={selected}
          setSelected={setSelected}
          icon={icon}
        />
      </Box>
    </SubMenu>
  )
}

export default Submenu