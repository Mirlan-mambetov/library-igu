import { MyModalContext } from '../../../../contexts/MyModal.context'
import { elibraryApi } from '../../../../store/api/elibrary/elibrary.api'
import { tokens } from '../../../../theme'
import { Field, isErrorWithMessage, isFetchBaseQueryError } from '../../../UI'
import { Textarea } from '../../../UI/Textarea/Textarea'
import { ElibraryBookDto } from '../ElibraryForm.dto'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useSnackbar } from 'notistack'
import { FC, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const CreateElibraryBook: FC = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { updateId, onClose } = useContext(MyModalContext)
	const { enqueueSnackbar } = useSnackbar()

	const [createBook, { isLoading }] =
		elibraryApi.useCreateElibraryBookMutation()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<ElibraryBookDto>({ mode: 'onChange' })

	const submitHandler: SubmitHandler<ElibraryBookDto> = async (data) => {
		try {
			const file = data.file[0]
			if (!file.name.match(/\.(pdf|word)$/)) {
				console.log(file.type)
				return enqueueSnackbar('Поддерживаемые форматы для файлов pdf, word', {
					variant: 'error'
				})
			}

			const formData = new FormData()
			formData.append('authors', data.authors)
			formData.append('description', data.description)
			formData.append('published', data.published)
			formData.append('file', file)

			await createBook({ id: updateId, data: formData })
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
					Добавить книгу
				</Typography>
				<Field
					{...register('authors', {
						required: 'Введите автора'
					})}
					placeholder='Авторы'
					type='text'
					error={errors.authors}
				/>
				<Field
					{...register('published', {
						required: 'Год издания обязательна'
					})}
					placeholder='Год издания'
					type='number'
					error={errors.published}
				/>
				<Field
					{...register('file', {
						required: 'Выберите файл'
					})}
					type='file'
					error={errors.file}
				/>
				<Textarea
					{...register('description', {
						required: 'Описание обязательно'
					})}
					placeholder='Описание'
					error={errors.description}
				/>
				<Button color='success' type='submit'>
					Отправить
				</Button>
			</Box>
		</form>
	)
}

export default CreateElibraryBook
