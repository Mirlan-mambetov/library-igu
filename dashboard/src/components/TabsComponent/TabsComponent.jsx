import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import ButtonComponent from '../ButtonComponent/ButtonComponent'


const TabsComponent = ({ title, link = [] }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box
      pt="20px"
      pb="12px"
      sx={{ width: "100%" }}
    >
      <Box display="flex" gap="12px" flexDirection="column" mb="15px">
        <Typography
          sx={{ display: "flex", alignItems: "center", gap: "3px" }}
          variant='h4'
        >
          {title}
          <ButtonComponent
            type="update"
            title="Создать или обновить страницу, может только администратор"
          />
        </Typography>
        <Typography
          display="flex"
          gap="4px"
          alignItems="center"
          variant='h6'
          color={colors.blueAccent[500]}
        >
          Добавить подраздел
          <ButtonComponent
            type="create"
          />
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" gap="5px">
        {link.map(l => (
          <Box
            key={l.id}
            sx={{ display: "flex", alignItems: "center", gap: "3px" }}
          >
            <a
              style={{ color: colors.grey[100], textDecoration: "none" }}
              href={l.link}
              target="_blank"
              rel='noreferrer'
            >
              {l.name}
            </a>
            <ButtonComponent
              type="update"
              color="success"
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default TabsComponent