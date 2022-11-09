import React from 'react'
import { MenuItem } from 'react-pro-sidebar'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'


const MenuList = ({ selected, title, to, icon, setSelected }) => {
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