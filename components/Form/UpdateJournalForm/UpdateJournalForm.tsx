import { MyModalContext } from '../../../contexts/MyModal.context'
import { journalApi } from '../../../store/api/Journal/journal.api'
import { tokens } from '../../../theme'
import { Field, UploadField } from '../../UI'
import { ErrorDisplayed } from '../../UI'
import { Textarea } from '../../UI/Textarea/Textarea'
import { IJournalDto } from './UpdateJournal.dto'
import { IUpdateJournalDto } from './UpdateJournal.field.dto'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { FC, useState } from 'react'
import { useContext } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

export const UpdateJournal: FC = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { updateId, onClose } = useContext(MyModalContext)
	const {
		register,
		control,
		watch,
		setValue,
		handleSubmit,
		formState: { errors }
	} = useForm<IJournalDto>({ mode: 'onChange' })
	const [updateJournal, { isSuccess, error }] =
		journalApi.useUpdateJournalMutation()

	console.log(updateId)

	const filePath = watch('image')
	const [file, setFile] = useState('')
	// END
	const handleUpload = (file: string) => {
		setValue('image', file)
		setFile(filePath)
	}

	const [isChosen, setIsChosen] = useState(false)
	const [percent, setIsPercent] = useState(0)
	const [isUploaded, setIsUploaded] = useState(false)
	const setProgressPercent = (val: number) => {
		setIsPercent(val)
		if (val === 100) setIsUploaded(true)
	}

	const submitHanlder: SubmitHandler<IJournalDto> = (data) => {
		updateJournal({
			id: updateId,
			title: data.title,
			subtitle: data.subtitle,
			description: data.description
		})
			.unwrap()
			.then(() => onClose())
	}
	return (
		<form onSubmit={handleSubmit(submitHanlder)}>
			<ErrorDisplayed error={error} />
			{!isChosen ? (
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
					<Typography variant='h5' color={colors.grey[100]}>
						Обновление инофрмации о журнале
					</Typography>
					<Typography variant='h6' color={colors.greenAccent[100]}>
						Начните с файла
					</Typography>
					<Controller
						control={control}
						name='image'
						render={() => (
							<UploadField
								onChange={handleUpload}
								setValue={setProgressPercent}
								id={updateId}
								isUploaded={isUploaded}
								setIsChosen={setIsChosen}
								url='journal/journalimage'
								method='PUT'
								typeFile='image'
								percent={percent}
							/>
						)}
					/>
				</Box>
			) : (
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
					<Typography variant='h5' color={colors.grey[100]}>
						Теперь заполните все поля
					</Typography>
					<Field
						{...register('title', {
							required: 'Главный заголовок обязателен'
						})}
						type='text'
						error={errors.title}
						placeholder='Заголовок о журнале'
					/>
					<Field
						{...register('subtitle', {
							required: 'Подзаголовок обязателен'
						})}
						type='text'
						error={errors.subtitle}
						placeholder='Подзаголовок о журнале'
					/>
					<Textarea
						{...register('description', {
							required: 'Опишите описание одним словом...'
						})}
						placeholder='Описание'
						error={errors.description}
					/>
					<Button color='success' type='submit' onClick={() => submitHanlder}>
						Отправить
					</Button>
				</Box>
			)}
		</form>
	)
}
