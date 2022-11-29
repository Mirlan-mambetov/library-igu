import { MyModalContext } from '../../../../contexts/MyModal.context'
import { journalApi } from '../../../../store/api/Journal/journal.api'
import { tokens } from '../../../../theme'
import { Field, UploadField } from '../../../UI'
import { ErrorDisplayed } from '../../../UI'
import { Textarea } from '../../../UI/Textarea/Textarea'
import { IUpdateJournalHeadDto } from './UpdateJournalHead.dto'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { FC, useState } from 'react'
import { useContext } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

export const UpdateJournalHead: FC = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { updateId, onClose } = useContext(MyModalContext)
	const [updateJournalHead, { isSuccess, error }] =
		journalApi.useUpdateJournalHeadMutation()
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<IUpdateJournalHeadDto>({ mode: 'onChange' })
	console.log(updateId)

	const submitHanlder: SubmitHandler<IUpdateJournalHeadDto> = (data) => {
		updateJournalHead({ ...data, id: updateId })
			.unwrap()
			.then(() => onClose())
	}
	return (
		<form onSubmit={handleSubmit(submitHanlder)}>
			<ErrorDisplayed error={error} />
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
				<Field
					{...register('title', {
						required: 'Введите название'
					})}
					error={errors.title}
					type='text'
					placeholder='Заголовок, наверное самое назойливое слово...'
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
