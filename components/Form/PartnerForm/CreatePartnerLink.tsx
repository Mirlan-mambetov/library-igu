import { MyModalContext } from '../../../contexts/MyModal.context'
import { isFetchBaseQueryError } from '../../../helpers/fetchBaseQueryError'
import { partnersApi } from '../../../store/api/partners/partners.api'
import { tokens } from '../../../theme'
import { Field, isErrorWithMessage } from '../../UI'
import { PartnerDto } from './Partner.dto'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useSnackbar } from 'notistack'
import React, { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export const CreatePartnerLink = () => {
	const { updateId, onClose } = useContext(MyModalContext)
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { enqueueSnackbar } = useSnackbar()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<PartnerDto>({ mode: 'onChange' })

	const [createPartner] = partnersApi.useCreatePartnerLinkMutation()

	const submitHanlder: SubmitHandler<PartnerDto> = async (data) => {
		try {
			if (!data.image) {
				return enqueueSnackbar('Так, выбери файл пожалуйста', {
					variant: 'warning'
				})
			}
			const file = data.image[0]
			if (!file.name.match(/\.(png|jpeg|jpg|gif)$/)) {
				console.log(file.type)
				return enqueueSnackbar(
					'Поддерживаемые форматы изображений png, jpeg, jpg, gif.',
					{ variant: 'error' }
				)
			}
			const formData = new FormData()
			formData.append('link', data.link)
			formData.append('file', file)

			await createPartner(formData)
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
				<Box>
					<Typography variant='h5' color={colors.grey[100]}>
						Создать партнера
					</Typography>
					<Typography
						sx={{ pl: '12px', py: '10px' }}
						variant='subtitle2'
						color={colors.redAccent[400]}
					>
						Внимание: ссылка должна быть без протокола - http & https. Протокол
						ставится автоматически.
					</Typography>
				</Box>
				<Field
					{...register('link', {
						required: 'Введите ссылку. Она же не может быть пустым..'
					})}
					error={errors.link}
					type='text'
					placeholder='Введите ссылку в формате example.com'
				/>
				<Field
					{...register('image', { required: 'Так, выбери файл пожалуйста' })}
					error={errors.image}
					type='file'
				/>
				<Button color='success' type='submit'>
					Отправить
				</Button>
			</Box>
		</form>
	)
}
