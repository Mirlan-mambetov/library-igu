import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { MyModalContext } from '../../../contexts/MyModal.context'
import { pageApi } from '../../../store/api/page/page.api'
import { Field } from '../../UI'
import { FC } from 'react'
import { IPageDto } from './Page.dto'

export const PageForm: FC = () => {
  const { onClose } = useContext(MyModalContext)
  const [createPage, { isSuccess }] = pageApi.useCreatePageMutation()
  const { register, handleSubmit, formState: { errors } } = useForm<IPageDto>()

  const submitHandler: SubmitHandler<IPageDto> = data => (
    createPage({ ...data })
      .unwrap()
      .then(() => onClose())
  )

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Field
        {...register('name')}
        type='text'
        error={errors.name}
      />
      <Button
        variant='contained'
        color='success'
        sx={{ color: '#fff' }}
        type='submit'
      >
        Создать
      </Button>
    </form>
  )
}
