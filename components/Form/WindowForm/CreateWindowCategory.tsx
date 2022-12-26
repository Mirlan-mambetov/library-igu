import { MyModalContext } from '../../../contexts/MyModal.context'
import { windowApi } from '../../../store/api/window/window.api'
import { tokens } from '../../../theme'
import { Field, isErrorWithMessage, isFetchBaseQueryError } from '../../UI'
import { updateWindowCategoryDto } from './UpdateWindowCategory.dto'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useSnackbar } from 'notistack'
import React, { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export const CreateWindowCategory = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { updateId, onClose } = useContext(MyModalContext)
	const { enqueueSnackbar } = useSnackbar()
	const [createCategory, { isLoading }] =
		windowApi.useCreateWindowCategoryMutation()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<updateWindowCategoryDto>({ mode: 'onChange' })

	const submitHandler: SubmitHandler<updateWindowCategoryDto> = async (
		data
	) => {
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
			formData.append('name', data.name)
			formData.append('file', file)

			await createCategory({ id: updateId, data: formData })
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
		<form onSubmit={handleSubmit(submitHandler)}>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
				<Typography variant='h5' color={colors.grey[100]}>
					Создать категорию
				</Typography>
				<Field
					{...register('name', { required: 'Название категории обязательна' })}
					type='text'
					placeholder='Название категории'
					error={errors.name}
				/>
				<Field
					{...register('file', { required: 'Файл не выбран' })}
					type='file'
					placeholder='Выберите файл'
					error={errors.name}
				/>
				<Button color='success' type='submit' disabled={isLoading}>
					Отправить
				</Button>
			</Box>
		</form>
	)
}
