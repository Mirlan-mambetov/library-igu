import { MyModalContext } from '../../../contexts/MyModal.context'
import { isFetchBaseQueryError } from '../../../helpers/fetchBaseQueryError'
import { teachersApi } from '../../../store/api/teachers/teachers.api'
import { tokens } from '../../../theme'
import { Field, isErrorWithMessage } from '../../UI'
import { Textarea } from '../../UI/Textarea/Textarea'
import { CreateTeachersWorkDto } from './CreateTeachersWork.dto'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useSnackbar } from 'notistack'
import React, { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export const UpdateTeachersWork = () => {
	const { updateId, onClose } = useContext(MyModalContext)
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { enqueueSnackbar } = useSnackbar()
	const [updateTeachersWork] = teachersApi.useUpdateTeachersWorkMutation()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<CreateTeachersWorkDto>({ mode: 'onChange' })

	const submitHanlder: SubmitHandler<CreateTeachersWorkDto> = async (data) => {
		try {
			const file = data.file[0]
			if (!file.name.match(/\.(pdf|word)$/)) {
				console.log(file.type)
				return enqueueSnackbar(
					'Для файлов поддерживается форматы только pdf, word.',
					{ variant: 'error' }
				)
			}
			const formData = new FormData()
			formData.append('authors', data.authors)
			formData.append('description', data.description)
			formData.append('file', file)

			await updateTeachersWork({ id: updateId, data: formData })
				.unwrap()
				.then(() => onClose())
		} catch (err) {
			if (isFetchBaseQueryError(err)) {
				const errMsg =
					// @ts-ignore
					'error' in err ? err.error : JSON.stringify(err.data.message)
				// @ts-ignore
				enqueueSnackbar(errMsg, { variant: 'error' })
			} else if (isErrorWithMessage(err)) {
				enqueueSnackbar(err.message, { variant: 'error' })
			}
		}
	}

	return (
		<form onSubmit={handleSubmit(submitHanlder)}>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
				<Typography variant='h5' color={colors.grey[100]}>
					Добавление материала
				</Typography>
				<Field
					{...register('authors', { required: 'Заполните авторов' })}
					error={errors.authors}
					type='text'
					placeholder='Авторы'
				/>
				<Field
					{...register('file', {
						required: 'Выберите файл'
					})}
					type='file'
					error={errors.file}
				/>
				<Textarea
					{...register('description', {
						required: 'Введите описание'
					})}
					placeholder='Описание'
					error={errors.description}
				/>
				<Button color='success' type='submit'>
					Отправить
				</Button>
			</Box>
		</form>
	)
}
