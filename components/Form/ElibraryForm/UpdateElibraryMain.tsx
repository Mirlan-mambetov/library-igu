import { MyModalContext } from '../../../contexts/MyModal.context'
import { elibraryApi } from '../../../store/api/elibrary/elibrary.api'
import { tokens } from '../../../theme'
import { Field, isErrorWithMessage, isFetchBaseQueryError } from '../../UI'
import { ElibraryDto } from './ElibraryForm.dto'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useSnackbar } from 'notistack'
import { FC, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const UpdateElibraryMain: FC = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { updateId, onClose } = useContext(MyModalContext)
	const { enqueueSnackbar } = useSnackbar()
	const [updateElibrary, { isLoading }] =
		elibraryApi.useUpdateElibraryMutation()
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<ElibraryDto>({ mode: 'onChange' })

	const submitHandler: SubmitHandler<ElibraryDto> = async (data) => {
		try {
			const file = data.image[0]
			if (!file.name.match(/\.(png|jpeg|jpg|gif)$/)) {
				console.log(file.type)
				return enqueueSnackbar(
					'Поддерживаемые форматы изображений png, jpeg, jpg, gif.',
					{ variant: 'error' }
				)
			}
			const formData = new FormData()
			formData.append('name', data.name)
			formData.append('image', file)
			await updateElibrary({ id: updateId, data: formData })
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
					Редактирование категории
				</Typography>
				<Field
					{...register('name', {
						required: 'Название категории обязательна'
					})}
					placeholder='Название категории'
					type='text'
					error={errors.name}
				/>
				<Field
					{...register('image', {
						required: 'Выберите файл'
					})}
					type='file'
					error={errors.image}
				/>
				<Button color='success' type='submit'>
					Отправить
				</Button>
			</Box>
		</form>
	)
}

export default UpdateElibraryMain
