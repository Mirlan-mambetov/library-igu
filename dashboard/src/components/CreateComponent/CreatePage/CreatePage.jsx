import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

// COMPONENTS
import { Header, Input, ButtonComponent, Form } from '../../'

const CreatePage = () => {
  return (
    <Box>
      <Header
        title="Добавить страницу"
        subtitle="страницы может редактировать и добавлять только администратор сайта!" />
      <Form>
        <Input
          placeholder="Название страницы"
        />
        <ButtonComponent
          type="plus"
          content="Создать"
          color="success"
          sx={{ marginTop: "10px" }}
        />
      </Form>
    </Box>
  )
}

export default CreatePage