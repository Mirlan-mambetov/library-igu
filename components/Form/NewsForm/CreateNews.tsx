import { MyModalContext } from '../../../contexts/MyModal.context'
import { isFetchBaseQueryError } from '../../../helpers/fetchBaseQueryError'
import { newsApi } from '../../../store/api/news/news.api'
import { tokens } from '../../../theme'
import { Field, isErrorWithMessage } from '../../UI'
import { Textarea } from '../../UI/Textarea/Textarea'
import { INewsDto } from './news.dto'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useSnackbar } from 'notistack'
import { FC, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export const CreateNews: FC = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { enqueueSnackbar } = useSnackbar()
	const { onClose } = useContext(MyModalContext)
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<INewsDto>({
		mode: 'onChange'
	})

	const [createNews, { isLoading, error }] = newsApi.useCreateNewsMutation()

	const submitHanlder: SubmitHandler<INewsDto> = async (data) => {
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
			formData.append('title', data.title)
			formData.append('description', data.description)
			formData.append('file', file)
			await createNews(formData)
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
					Добавить новость
				</Typography>
				<Field
					{...register('title', { required: 'Название новости обязательна' })}
					type='text'
					placeholder='Название новости'
					error={errors.title}
				/>
				<Field
					{...register('image', { required: 'Выберите изображение новости' })}
					type='file'
					error={errors.image}
				/>
				<Textarea
					{...register('description', { required: 'Введите описание' })}
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
