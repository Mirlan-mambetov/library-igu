import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { Box, Typography, useTheme, colors } from '@mui/material'
import { Link } from 'react-router-dom'
import { tokens } from '../../theme'

// ICONS
import {
  HomeOutlined,
  ReceiptOutlined,
  CalendarTodayOutlined,
  PersonOutlined,
  HelpOutlineOutlined,
  BarChartOutlined,
  PieChartOutlineOutlined,
  TimelineOutlined,
  MapOutlined
} from '@mui/icons-material'

// ITEMS 
const Items = ({ selected, title, to, icon, setSelected }) => {
  return (
    <MenuItem
      active={selected === to}
      style={{ color: colors.grey[100] }}
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

const SidebarApp = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [selected, setSelected] = useState('')


  return (
    <Box
      style={{ display: 'flex', height: '100%' }}
      sx={{
        "& .icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .menu-anchor:hover": {
          color: "#868dfb !important",
          backgroundColor: "transparent !important"
        },
        "& .menu-item.active": {
          "& .menu-anchor": {
            background: "transparent !important",
            color: "#868dfb !important"
          }
        }
      }}
    >
      <Sidebar
        backgroundColor={colors.primary[700]}
        collapsedWidth="80px"
        style={{ border: 'none' }}
      >
        <Menu >

          <Box sx={{ mt: "30px" }}>
            <Items
              title="Главная"
              to="/"
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Items
              title="Invoices"
              to="/invoices"
              icon={<ReceiptOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant='h6'
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Редактирование
            </Typography>
            <Items
              title="Пользователи"
              to="/users"
              icon={<PersonOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant='h6'
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Инофрмация
            </Typography>
            <Items
              title="Календарь"
              to="/calendar"
              icon={<CalendarTodayOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Items
              title="Статистика хостинга"
              to="/pie"
              icon={<PieChartOutlineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Items
              title="Общая статистика"
              to="/bar"
              icon={<BarChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Items
              title="Статистика в линии"
              to="/line"
              icon={<TimelineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Items
              title="Статистика по карте"
              to="/geography"
              icon={<MapOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Items
              title="FAQ информация"
              to="/contacts"
              icon={<HelpOutlineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  )
}

export default SidebarApp