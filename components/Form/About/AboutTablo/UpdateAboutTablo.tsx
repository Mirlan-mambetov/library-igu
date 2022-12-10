import { MyModalContext } from '../../../../contexts/MyModal.context'
import { aboutApi } from '../../../../store/api/about/about.api'
import { tokens } from '../../../../theme'
import { Field, isErrorWithMessage, isFetchBaseQueryError } from '../../../UI'
import { AboutTabloDto } from './UpdateAboutTablo.dto'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useSnackbar } from 'notistack'
import { FC, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const UpdateAboutTablo: FC = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { onClose, updateId } = useContext(MyModalContext)
	const { enqueueSnackbar } = useSnackbar()
	console.log(updateId)

	const [updateTablo, { isLoading }] = aboutApi.useUpdateAboutTabloMutation()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<AboutTabloDto>({ mode: 'onChange' })

	const submitHandler: SubmitHandler<AboutTabloDto> = async (data) => {
		try {
			await updateTablo({
				id: updateId,
				data: { ceils: Number(data.ceils), description: data.description }
			})
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
					Редактирование
				</Typography>
				<Field
					{...register('ceils', { required: 'Колличество обязательна' })}
					type='number'
					placeholder='Введите колличество'
					error={errors.ceils}
				/>
				<Field
					{...register('description', { required: 'Описание обязательна' })}
					type='text'
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
export default UpdateAboutTablo
