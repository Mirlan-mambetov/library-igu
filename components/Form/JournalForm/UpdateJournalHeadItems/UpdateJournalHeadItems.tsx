import { MyModalContext } from '../../../../contexts/MyModal.context'
import { journalApi } from '../../../../store/api/Journal/journal.api'
import { tokens } from '../../../../theme'
import { Field } from '../../../UI'
import { ErrorDisplayed } from '../../../UI'
import { IUpdateJournalHeadItemsDto } from './UpdateJournalHeadItems.dto'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { FC } from 'react'
import { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export const UpdateJournalHeadItems: FC = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { updateId, onClose } = useContext(MyModalContext)
	const [updateJournalHeadItems, { isSuccess, error }] =
		journalApi.useUpdateJournalHeadItemsMutation()
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<IUpdateJournalHeadItemsDto>({ mode: 'onChange' })

	console.log(updateId)

	const submitHanlder: SubmitHandler<IUpdateJournalHeadItemsDto> = (data) => {
		updateJournalHeadItems({ ...data, id: updateId })
			.unwrap()
			.then(() => onClose())
	}

	return (
		<form onSubmit={handleSubmit(submitHanlder)}>
			<ErrorDisplayed error={error} />
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
				<Field
					{...register('title', {
						required: 'Введите Заголовок'
					})}
					error={errors.title}
					type='text'
					placeholder='Заголовок'
				/>
				<Field
					{...register('description', {
						required: 'Введите описание'
					})}
					error={errors.description}
					type='text'
					placeholder='Описание'
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
