import { MyModalContext } from '../../../../contexts/MyModal.context'
import { tabsApi } from '../../../../store/api/tabs/tabs.api'
import { tokens } from '../../../../theme'
import {
	Field,
	isErrorWithMessage,
	isFetchBaseQueryError,
	UploadField
} from '../../../UI'
import { ErrorDisplayed } from '../../../UI'
import { IUpdateTabLinkDto } from './UpdateTabLink.dto'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useSnackbar } from 'notistack'
import { FC, useState } from 'react'
import { useContext } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

export const UpdateTabLink: FC = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { updateId, onClose } = useContext(MyModalContext)
	const { enqueueSnackbar } = useSnackbar()
	const [updateTabLink, { isSuccess, error }] =
		tabsApi.useUpdateTabLinkMutation()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<IUpdateTabLinkDto>({ mode: 'onChange' })

	const submitHanlder: SubmitHandler<IUpdateTabLinkDto> = async (data) => {
		try {
			const formData = new FormData()
			const file = data.link[0]
			formData.append('name', data.name)
			formData.append('file', file)
			await updateTabLink({ id: updateId, data: formData })
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
			<ErrorDisplayed error={error} />
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
				<Field
					{...register('name', {
						required: 'Введите название'
					})}
					error={errors.name}
					type='text'
					placeholder='Название'
				/>
				<Field
					{...register('link', {
						required: 'Выберите файл'
					})}
					type='file'
					error={errors.link}
				/>
				<Button
					sx={{ my: '15px' }}
					color='success'
					type='submit'
					onClick={() => submitHanlder}
				>
					Отправить
				</Button>
			</Box>
		</form>
	)
}
