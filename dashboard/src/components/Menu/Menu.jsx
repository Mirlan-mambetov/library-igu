import React from 'react'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import { Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { tokens } from '../../theme'


const MenuList = ({ selected, title, to, icon, setSelected }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <MenuItem
      active={selected === to}
      style={{ color: "#ffffff" }}
      onClick={() => setSelected(to)}
      icon={icon}
      routerLink={<Link to={to} />}
    >
      <Typography>
        {title}
      </Typography>
    </MenuItem>
  )
}

export default MenuList