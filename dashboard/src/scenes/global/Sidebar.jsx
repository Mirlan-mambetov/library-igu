import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
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
  TimelineOutlined,
  MapOutlined,
  ListOutlined,
  PagesOutlined
} from '@mui/icons-material'

// COMPONENTS
import {
  MenuList
} from '../../components'

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
        "& .sub-menu-content": {
          background: "transparent !important",
        },
        "& .menu-item.active": {
          "& .menu-anchor": {
            background: "transparent !important",
            color: "#868dfb !important"
          }
        },
        "& .menu-item.active": {
          "& .menu-anchor": {
            background: "transparent !important",
            color: "#868dfb !important"
          }
        },
        "& .menu-item.open": {
          "& .sub-menu-content": {
            background: "transparent !important",
          }
        }
      }}
    >
      <Sidebar
        backgroundColor={colors.primary[600]}
        collapsedWidth="80px"
        style={{ border: 'none' }}
      >
        <Menu >
          <Box sx={{ mt: "30px" }}>
            <MenuList
              title="Главная"
              to="/"
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* submenu */}
            <Box>
              <SubMenu
                label='Страницы'
                icon={<PagesOutlined />}
                style={{ color: "#ffffff" }}
              >
                <Box
                  sx={{ pl: "12px" }}
                >
                  <MenuList
                    title="Главная страница"
                    to="/main-page"
                    selected={selected}
                    setSelected={setSelected}
                    icon={<ListOutlined fontSize='small' />}
                  />
                  <MenuList
                    title="О библиотеке"
                    to="/about"
                    selected={selected}
                    setSelected={setSelected}
                    icon={<ListOutlined fontSize='small' />}
                  />
                  <MenuList
                    title="Вестник"
                    to="/vestnik"
                    selected={selected}
                    setSelected={setSelected}
                    icon={<ListOutlined fontSize='small' />}
                  />
                </Box>
              </SubMenu>
            </Box>
            <MenuList
              title="Пользователи"
              to="/users"
              icon={<PersonOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <MenuList
              title="Календарь"
              to="/calendar"
              icon={<CalendarTodayOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <MenuList
              title="Статистика в линии"
              to="/line"
              icon={<TimelineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <MenuList
              title="Статистика по карте"
              to="/geography"
              icon={<MapOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <MenuList
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