import { MyModalContext } from '../../../../contexts/MyModal.context'
import { archivApi } from '../../../../store/api/archiv/archiv.api'
import { tokens } from '../../../../theme'
import { Field, isErrorWithMessage, isFetchBaseQueryError } from '../../../UI'
import { Textarea } from '../../../UI/Textarea/Textarea'
import { IArchivMaterialDto } from '../Archiv.dto'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useSnackbar } from 'notistack'
import React, { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export const ArchivUpdateMaterial = () => {
	const { updateId, onClose } = useContext(MyModalContext)
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { enqueueSnackbar } = useSnackbar()
	const [updateMaterial, { isSuccess }] =
		archivApi.useUpdateArchivMaterialMutation()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<IArchivMaterialDto>({ mode: 'onChange' })

	const submitHanlder: SubmitHandler<IArchivMaterialDto> = async (data) => {
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
			formData.append('name', data.name)
			data.description && formData.append('description', data.description)
			formData.append('file', file)
			await updateMaterial({ id: updateId, data: formData })
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
					Редактирование материала
				</Typography>
				<Field
					{...register('authors', {
						required: 'Заполните авторов'
					})}
					type='text'
					placeholder='Авторы'
					error={errors.authors}
				/>
				<Field
					{...register('name', { required: 'Название обязательно' })}
					error={errors.name}
					type='text'
					placeholder='Название'
				/>
				<Field
					{...register('file', {
						required: 'Выберите файл'
					})}
					type='file'
					error={errors.file}
				/>
				<Textarea
					{...register('description')}
					placeholder='Описание (не обязательное поле)'
				/>
				<Button color='success' type='submit'>
					Отправить
				</Button>
			</Box>
		</form>
	)
}
