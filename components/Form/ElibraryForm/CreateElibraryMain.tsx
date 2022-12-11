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

const CreateElibraryMain: FC = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { onClose } = useContext(MyModalContext)
	const { enqueueSnackbar } = useSnackbar()
	const [createElibrary, { isLoading }] =
		elibraryApi.useCreateElibraryMutation()

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
			await createElibrary(formData)
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
					Создать категорию для электронной библиотеки
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
				<Button color='success' type='submit' disabled={isLoading}>
					Отправить
				</Button>
			</Box>
		</form>
	)
}

export default CreateElibraryMain
