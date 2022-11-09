import React, { useState } from 'react'
import { Box } from '@mui/material'
import { SubMenu } from 'react-pro-sidebar'

// ICONS
import {
  HomeOutlined,
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
} from '..'


const MenuApp = () => {
  const [selected, setSelected] = useState('')


  return (
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
            <MenuList
              title="Кыргыз-тили жана адабияты"
              to="/kyrgyz-language"
              selected={selected}
              setSelected={setSelected}
              icon={<ListOutlined fontSize='small' />}
            />
            <MenuList
              title="Электронная библиотека"
              to="/elibrary"
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
  )
}

export default MenuApp