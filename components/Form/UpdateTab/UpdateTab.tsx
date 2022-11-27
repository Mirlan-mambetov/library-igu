import { MyModalContext } from '../../../contexts/MyModal.context'
import { tabsApi } from '../../../store/api/tabs/tabs.api'
import { tokens } from '../../../theme'
import { Field } from '../../UI'
import { ErrorDisplayed } from '../../UI'
import { IUpdateTabDto } from './UpdateTab.dto'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { FC, useState } from 'react'
import { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export const UpdateTab: FC = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const [isLink, setIsLink] = useState<boolean>(false)
	const [hidden, setHidden] = useState<boolean>(false)
	const { updateId, onClose } = useContext(MyModalContext)
	const [updateTab, { isSuccess, error }] = tabsApi.useUpdateTabMutation()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<IUpdateTabDto>({ mode: 'onChange' })

	console.log(updateId)

	const submitHanlder: SubmitHandler<IUpdateTabDto> = (data) => {
		updateTab({ ...data, id: updateId })
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
					type='text'
					placeholder='Заголовок'
					error={errors.title}
					disabled={!hidden}
				/>
				{!hidden && (
					<Box sx={{ px: '30px' }}>
						<Typography variant='subtitle2'>
							Для табов, которые имеют ссылки, нельзя обновить описание. Есть ли
							описание тут?
							<Typography variant='subtitle2' color={colors.redAccent[700]}>
								Внимание: после нажатия Да(есть), вам будет необходимо обновить
								оба поля
							</Typography>
						</Typography>
						<Button
							sx={{ my: '15px' }}
							color='success'
							type='submit'
							onClick={() => {
								setIsLink(true), setHidden(true)
							}}
						>
							Да, есть
						</Button>
						<Button
							sx={{ my: '15px' }}
							color='success'
							type='submit'
							onClick={() => setHidden(true)}
						>
							Нет, я пас.. сам разбирайся..
						</Button>
					</Box>
				)}
				{isLink && (
					<Field
						{...register('description', {
							required: 'Введите описание'
						})}
						type='text'
						placeholder='Описание'
						error={errors.description}
					/>
				)}
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
