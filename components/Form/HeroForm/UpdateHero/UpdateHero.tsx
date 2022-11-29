import { MyModalContext } from '../../../../contexts/MyModal.context'
import { isFetchBaseQueryError } from '../../../../helpers/fetchBaseQueryError'
import { heroApi } from '../../../../store/api/hero/hero.api'
import { Field, isErrorWithMessage } from '../../../UI'
import { IHeroDto } from '../Hero.dto'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useSnackbar } from 'notistack'
import { FC } from 'react'
import { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export const UpdateHero: FC = () => {
	const { updateId, onClose } = useContext(MyModalContext)
	const { enqueueSnackbar } = useSnackbar()
	const [updateHero, { isLoading }] = heroApi.useUpdateHeroMutation()
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<IHeroDto>({ mode: 'onChange' })
	const submitHanlder: SubmitHandler<IHeroDto> = async (data) => {
		try {
			const file = data.background[0]
			if (!file.name.match(/\.(jpg|jpeg|png|gif)$/)) {
				console.log(file.type)
				return enqueueSnackbar(
					'Поддерживаемые форматы изображений .jpg, .jpeg, .gif, .png',
					{ variant: 'error' }
				)
			}
			const formData = new FormData()
			formData.append('title', data.title)
			formData.append('background', file)
			await updateHero({ id: updateId, data: formData })
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
				{/* <Typography variant='h5' color={colors.grey[100]}>
					Теперь введите заголовок
				</Typography> */}
				<Field
					{...register('title', {
						required: 'Заголовок обязателен'
					})}
					type='text'
					error={errors.title}
				/>
				<Field
					{...register('background', {
						required: 'Выберите файл'
					})}
					type='file'
					// error={errors.background}
				/>
				<Button
					disabled={isLoading}
					color='success'
					type='submit'
					onClick={() => submitHanlder}
				>
					{isLoading && <span>загрузка...</span>}
					Отправить
				</Button>
			</Box>
		</form>
	)
}
