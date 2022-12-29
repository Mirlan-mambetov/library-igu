import { MyModalContext } from '../../../contexts/MyModal.context'
import { IInternetLinkCategory } from '../../../interfaces/internetLink.interface'
import { internetLinkApi } from '../../../store/api/internetLink/internetLink.api'
import { tokens } from '../../../theme'
import { Field, isErrorWithMessage, isFetchBaseQueryError } from '../../UI'
import { Textarea } from '../../UI/Textarea/Textarea'
import { CreateLinkMainCategory } from './CreateLinkMainCategory'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useSnackbar } from 'notistack'
import { FC, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export const UpdateInternetLinkCategory: FC = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { onClose, updateId } = useContext(MyModalContext)
	const { enqueueSnackbar } = useSnackbar()
	const [updateLinkCategory, { isLoading }] =
		internetLinkApi.useUpdateLinkCategoryMutation()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<IInternetLinkCategory>({ mode: 'onChange' })

	const submitHandler: SubmitHandler<IInternetLinkCategory> = async (data) => {
		try {
			await updateLinkCategory({ data, id: updateId })
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
					Создать ссылку
				</Typography>
				<Field
					{...register('name', { required: 'Название ссылки обязательна' })}
					type='text'
					placeholder='Название ссылки'
					error={errors.name}
				/>
				<Field
					{...register('link', { required: 'Ссылка обязательна' })}
					type='text'
					placeholder='Вставьте ссылку в формате example.com'
					error={errors.link}
				/>
				<Textarea
					{...register('description')}
					placeholder='Описание ссылки (опцианально)'
					error={errors.description}
				/>
				<Button color='success' type='submit' disabled={isLoading}>
					Отправить
				</Button>
			</Box>
		</form>
	)
}
