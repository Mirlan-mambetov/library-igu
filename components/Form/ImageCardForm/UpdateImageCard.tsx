import { MyModalContext } from '../../../contexts/MyModal.context'
import { imageCardApi } from '../../../store/api/imageCard/imageCard.api'
import { tokens } from '../../../theme'
import { Field, isErrorWithMessage, isFetchBaseQueryError } from '../../UI'
import { Textarea } from '../../UI/Textarea/Textarea'
import { ImageCardDto } from './ImageCard.dto'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useSnackbar } from 'notistack'
import React, { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export const UpdateImageCard = () => {
	const { updateId, onClose } = useContext(MyModalContext)
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { enqueueSnackbar } = useSnackbar()
	const [updateCard, { isLoading }] = imageCardApi.useUpdateCardMutation()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<ImageCardDto>({ mode: 'onChange' })

	const submitHanlder: SubmitHandler<ImageCardDto> = async (data) => {
		try {
			const file = data.image[0]
			if (!file.name.match(/\.(png|jpeg|jpg|gif)$/)) {
				console.log(file.type)
				return enqueueSnackbar(
					'Поддерживаемые форматы изображений png, jpeg, jpg, gif',
					{ variant: 'error' }
				)
			}
			const formData = new FormData()
			formData.append('title', data.title)
			formData.append('subtitle', data.subtitle)
			formData.append('description', data.description)
			formData.append('file', file)
			await updateCard({ id: updateId, data: formData })
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
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
				<Typography variant='h5' color={colors.grey[100]}>
					Редактирование
				</Typography>
				<Field
					{...register('title', {
						required: 'Заголовок обязателен'
					})}
					type='text'
					placeholder='Заголовок'
					error={errors.title}
				/>
				<Field
					{...register('subtitle', {
						required: 'Подзаголвок обязателен'
					})}
					type='text'
					placeholder='Подзаголвок'
					error={errors.subtitle}
				/>
				<Field
					{...register('image', {
						required: 'Выберите файл'
					})}
					type='file'
					error={errors.image}
				/>
				<Textarea
					{...register('description', {
						required: 'Описание обязательно'
					})}
					placeholder='Описание'
					error={errors.description}
				/>
				<Button color='success' type='submit' disabled={isLoading}>
					Отправить
				</Button>
			</Box>
		</form>
	)
}
