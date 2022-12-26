import { MyModalContext } from '../../../contexts/MyModal.context'
import { IWindow } from '../../../interfaces/window.interface'
import { windowApi } from '../../../store/api/window/window.api'
import { tokens } from '../../../theme'
import { Field, isErrorWithMessage, isFetchBaseQueryError } from '../../UI'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useSnackbar } from 'notistack'
import { FC, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const WindowUpdateMainCategory: FC = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { onClose, updateId } = useContext(MyModalContext)
	const { enqueueSnackbar } = useSnackbar()
	const [updateMainCategory, { isLoading }] =
		windowApi.useUpdateWindowMainCategoryMutation()
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<IWindow>({ mode: 'onChange' })

	const submitHandler: SubmitHandler<IWindow> = async (data) => {
		try {
			await updateMainCategory({ id: updateId, data })
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
					Обновить категорию
				</Typography>
				<Field
					{...register('name', { required: 'Название категории обязательна' })}
					type='text'
					placeholder='Название категории'
					error={errors.name}
				/>
				<Button color='success' type='submit' disabled={isLoading}>
					Отправить
				</Button>
			</Box>
		</form>
	)
}

export default WindowUpdateMainCategory
