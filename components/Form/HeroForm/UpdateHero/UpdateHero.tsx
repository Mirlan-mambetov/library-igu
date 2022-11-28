import { MyModalContext } from '../../../../contexts/MyModal.context'
import { isFetchBaseQueryError } from '../../../../helpers/fetchBaseQueryError'
import { heroApi } from '../../../../store/api/hero/hero.api'
import { tokens } from '../../../../theme'
import {
	ErrorDisplayed,
	Field,
	isErrorWithMessage,
	UploadField
} from '../../../UI'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useSnackbar } from 'notistack'
import { FC, FormEventHandler, useState } from 'react'
import { useContext } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

export interface IHeroTestDto {
	id: number | string
	title: string
	background: FileList
}

export const UpdateHero: FC = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { updateId, onClose } = useContext(MyModalContext)
	const { enqueueSnackbar, closeSnackbar } = useSnackbar()
	const [updateHero, { isSuccess, error, isLoading }] =
		heroApi.useUpdateHeroMutation()
	const {
		register,
		control,
		watch,
		setValue,
		handleSubmit,
		formState: { errors }
	} = useForm<IHeroTestDto>({ mode: 'onChange' })

	const filePath = watch('background')
	const [file, setFile] = useState('')
	// END
	// const handleUpload = (background: string) => {
	// 	setValue('background', background)
	// 	setFile(filePath)
	// }

	const [isChosen, setIsChosen] = useState(false)
	const [percent, setIsPercent] = useState(0)
	const [isUploaded, setIsUploaded] = useState(false)
	const setProgressPercent = (val: number) => {
		setIsPercent(val)
		if (val === 100) setIsUploaded(true)
	}
	const CLOSE = 3000
	const submitHanlder: SubmitHandler<IHeroTestDto> = async (data) => {
		const validFileExtensions = [
			'image/jpg',
			'image/jpeg',
			'image/gif',
			'image/png'
		]
		try {
			const file = data.background[0]
			const valid = validFileExtensions.map((t) => t)
			if (file.type !== valid.toString()) {
				console.log(file.type)
				return enqueueSnackbar(
					'Поддерживаемые форматы изображений .jpg, .jpeg, .gif, .png',
					{ variant: 'error' }
				)
			}
			closeSnackbar(CLOSE)
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
			{/* {!isChosen ? (
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
					<Typography variant='h5' color={colors.grey[100]}>
						Обновление компонента Hero
					</Typography>
					<Typography
						variant='subtitle2'
						sx={{ my: '12px' }}
						color={colors.greenAccent[100]}
					>
						Начните с файла файл обязателен, без загрузки невозможно обновить
						компонент.
					</Typography>
					<Typography
						variant='subtitle2'
						sx={{ my: '12px' }}
						color={colors.redAccent[500]}
					>
						Внимание: размер изображение должен быть не меньше 1600 х 1080
						пикселей
					</Typography>
					<Controller
						control={control}
						name='background'
						render={() => (
							<UploadField
								onChange={handleUpload}
								setValue={setProgressPercent}
								id={updateId}
								isUploaded={isUploaded}
								setIsChosen={setIsChosen}
								url='hero/image'
								method='PUT'
								typeFile='background'
								percent={percent}
								error={errors.background}
							/>
						)}
					/>
				</Box>
			) : (
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
					<Typography variant='h5' color={colors.grey[100]}>
						Теперь введите заголовок
					</Typography>
					<Field
						{...register('title', {
							required: 'Заголовок обязателен'
						})}
						type='text'
						error={errors.title}
					/>
					<Button color='success' type='submit' onClick={() => submitHanlder}>
						Отправить
					</Button>
				</Box>
			)} */}
			{/* <ErrorDisplayed error={error} /> */}
		</form>
	)
}
