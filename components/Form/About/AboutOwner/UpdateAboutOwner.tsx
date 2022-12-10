import { MyModalContext } from '../../../../contexts/MyModal.context'
import { aboutApi } from '../../../../store/api/about/about.api'
import { tokens } from '../../../../theme'
import { Field, isErrorWithMessage, isFetchBaseQueryError } from '../../../UI'
import { AboutOwnerDto } from './AboutOwner.dto'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useSnackbar } from 'notistack'
import { FC, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const UpdateAboutOwner: FC = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { onClose, updateId } = useContext(MyModalContext)
	const { enqueueSnackbar } = useSnackbar()
	console.log(updateId)

	const [updateOwner, { isLoading }] = aboutApi.useUpdateAboutOwnerMutation()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<AboutOwnerDto>({ mode: 'onChange' })

	const submitHandler: SubmitHandler<AboutOwnerDto> = async (data) => {
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
			formData.append('name', data.name)
			formData.append('email', data.email)
			formData.append('phone', data.phone)
			formData.append('image', file)
			await updateOwner({ id: updateId, data: formData })
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
					{...register('name', { required: 'Имя обязательно' })}
					type='text'
					placeholder='Имя'
					error={errors.name}
				/>
				<Field
					{...register('email', { required: 'E-mail обязательно' })}
					type='text'
					placeholder='E-mail'
					error={errors.email}
				/>
				<Field
					{...register('phone', { required: 'Телефон обязательно' })}
					type='text'
					placeholder='Телефон'
					error={errors.phone}
				/>
				<Field
					{...register('image', { required: 'Выберите файл' })}
					type='file'
					error={errors.image}
				/>
				<Button color='success' type='submit' disabled={isLoading}>
					Отправить
				</Button>
			</Box>
		</form>
	)
}

export default UpdateAboutOwner
