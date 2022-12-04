import { MyModalContext } from '../../../contexts/MyModal.context'
import { isFetchBaseQueryError } from '../../../helpers/fetchBaseQueryError'
import { teachersApi } from '../../../store/api/teachers/teachers.api'
import { tokens } from '../../../theme'
import { Field, isErrorWithMessage } from '../../UI'
import { TeachersDto } from './UpdateTeachersCategory.dto'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useSnackbar } from 'notistack'
import { FC, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export const CreateTeachersCategory: FC = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { enqueueSnackbar } = useSnackbar()
	const { onClose, updateId } = useContext(MyModalContext)
	const [createCategory] = teachersApi.useCreateTeachersCategoryMutation()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<TeachersDto>({
		mode: 'onChange'
	})

	const submitHanlder: SubmitHandler<TeachersDto> = async (data) => {
		try {
			await createCategory(data)
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
		<form onSubmit={handleSubmit(submitHanlder)}>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
				<Typography variant='h5' color={colors.grey[100]}>
					Создать категорию
				</Typography>
				<Field
					{...register('name', { required: 'Название категории обязательна' })}
					type='text'
					placeholder='Название категории'
					error={errors.name}
				/>
				<Field
					{...register('description', {
						required: 'Краткое описание категории обязательна'
					})}
					type='text'
					placeholder='Краткое описание'
					error={errors.description}
				/>
				<Button color='success' type='submit'>
					Отправить
				</Button>
			</Box>
		</form>
	)
}
