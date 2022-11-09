import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

// COMPONENTS
import { Header, Input } from '../..'

const PageForm = () => {
  return (
    <Box>
      <Header
        title="Добавить страницу"
        subtitle="страницы может редактировать и добавлять только администратор сайта!" />
      <Input
        placeholder="Название страницы"
      />
    </Box>
  )
}

export default PageForm