import { MyModalContext } from '../../../../contexts/MyModal.context'
import { IAboutInfo } from '../../../../interfaces/about.inteface'
import { aboutApi } from '../../../../store/api/about/about.api'
import { Field, isErrorWithMessage, isFetchBaseQueryError } from '../../../UI'
import { Textarea } from '../../../UI/Textarea/Textarea'
import { AboutInfoDto } from './AboutInfo.dto'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useSnackbar } from 'notistack'
import { FC, useContext, useState, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const UpdateAboutInfo: FC = () => {
	const { updateId, onClose } = useContext(MyModalContext)
	const { enqueueSnackbar } = useSnackbar()
	const { data: infoData = {} as IAboutInfo, isLoading: isLoadingData } =
		aboutApi.useFetchAboutInfoByIdQuery({ id: updateId }, { skip: !updateId })
	const [updateAboutInfo, { isLoading }] = aboutApi.useUpdateAboutInfoMutation()
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<AboutInfoDto>({ mode: 'onChange' })

	const submitHandler: SubmitHandler<AboutInfoDto> = async (data) => {
		try {
			const formData = new FormData()
			if (data.image) {
				const file = data.image[0]
				if (!file.name.match(/\.(png|jpeg|jpg|gif)$/)) {
					return enqueueSnackbar(
						'Поддерживаемые форматы изображений png, jpeg, jpg, gif.',
						{ variant: 'error' }
					)
				}
				formData.append('file', file)
			}
			formData.append('title', data.title)
			formData.append('description', data.description)
			await updateAboutInfo({ id: updateId, data: formData })
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
		<>
			{isLoadingData ? (
				<span>загрузка данных...</span>
			) : (
				<form onSubmit={handleSubmit(submitHandler)}>
					<Box>
						<Field
							{...register('title', {
								value: infoData.title,
								required: 'Введите заголовок'
							})}
							type='text'
							placeholder='Введите заголовок'
							error={errors.title}
						/>
						{infoData.description && (
							<Textarea
								{...register('description', {
									value: infoData.description,
									required: 'Описание обязательно'
								})}
								placeholder='Опишите описание одинм словом..'
								error={errors.description}
							/>
						)}
						{infoData.image && <Field {...register('title')} type='file' />}
						<Button disabled={isLoading} color='success' type='submit'>
							Отправить
						</Button>
					</Box>
				</form>
			)}
		</>
	)
}

export default UpdateAboutInfo
