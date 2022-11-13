import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { tokens } from '../../theme'
import { useTheme } from '@emotion/react'

// COMPONENTS
import {
  ButtonComponent,
  Header
} from '../../components'

const Dashboard = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <>
      <Header title="Панель администратора" subtitle="панель управления сайта Научной библиотеки ИГУ" />
      <Box sx={{ display: "flex" }}>
        {/* Pages info */}
        <Box sx={{ boxShadow: "1px 2px 4px rgba(0, 0, 0, .3)", padding: "10px" }}>
          <Typography
            variant='h6'
            sx={{ display: "flex", alignItems: "center", gap: "12px" }}
            color={colors.greenAccent[500]}
          >
            Общее количество страниц сайта:
            <span></span>
          </Typography>
          <Box
            sx={{ display: "flex", gap: "12px", marginTop: "12px" }}
            title="Создать или обновить страницу, может только администратор"
          >
            <ButtonComponent
              type='plus'
              content="Создать страницу"
              title="Создать или обновить страницу, может только администратор"
              onClick={() => {
                // dispatch(openModal())
                // dispatch(createContent("createPage"))
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Dashboard