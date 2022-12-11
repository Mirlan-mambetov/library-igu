import { MyModalContext } from '../../../contexts/MyModal.context'
import { elibraryApi } from '../../../store/api/elibrary/elibrary.api'
import { tokens } from '../../../theme'
import { Field, isErrorWithMessage, isFetchBaseQueryError } from '../../UI'
import { ElibraryCategoryDto } from './ElibraryForm.dto'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useSnackbar } from 'notistack'
import { FC, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const UpdateElibraryCategory: FC = () => {
	const { updateId, onClose } = useContext(MyModalContext)
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { enqueueSnackbar } = useSnackbar()
	const [updateCategory, { isLoading }] =
		elibraryApi.useUpdateElibraryCategoryMutation()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<ElibraryCategoryDto>({ mode: 'onChange' })

	const submitHandler: SubmitHandler<ElibraryCategoryDto> = async (data) => {
		try {
			await updateCategory({ id: updateId, data })
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
					Обновить архив
				</Typography>
				<Field
					{...register('name', {
						required: 'Название обязательно'
					})}
					placeholder='Название категории'
					type='text'
					error={errors.name}
				/>
				<Button color='success' type='submit'>
					Отправить
				</Button>
			</Box>
		</form>
	)
}

export default UpdateElibraryCategory
