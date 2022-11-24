import { MyModalContext } from '../../../../contexts/MyModal.context'
import { heroApi } from '../../../../store/api/hero/hero.api'
import { tokens } from '../../../../theme'
import { Field, UploadField } from '../../../UI'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { FC, FormEventHandler, useState } from 'react'
import { useContext } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { BsCloudUpload } from 'react-icons/bs'

export interface IHeroTestDto {
	id: number
	title: string
	background: string
}

export const CreateHero: FC = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { updateId, onClose } = useContext(MyModalContext)
	const [updateHero, { isSuccess }] = heroApi.useUpdateHeroMutation()
	const {
		register,
		control,
		watch,
		setValue,
		handleSubmit,
		formState: { errors }
	} = useForm<IHeroTestDto>({ mode: 'onChange' })
	console.log(updateId)

	const filePath = watch('background')
	const [file, setFile] = useState('')
	// END
	const handleUpload = (background: string) => {
		setValue('background', background)
		setFile(filePath)
	}

	const [isChosen, setIsChosen] = useState(false)
	const [percent, setIsPercent] = useState(0)
	const [isUploaded, setIsUploaded] = useState(false)
	const setProgressPercent = (val: number) => {
		setIsPercent(val)
		if (val === 100) setIsUploaded(true)
	}

	const submitHanlder: SubmitHandler<IHeroTestDto> = (data) => {
		updateHero({ id: updateId, title: data.title })
			.unwrap()
			.then(() => onClose())
	}
	return (
		<form onSubmit={handleSubmit(submitHanlder)}>
			{!isChosen ? (
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
					<Typography variant='h5' color={colors.grey[100]}>
						Давайте создадим Компонент Hero для страницы
					</Typography>
					<Typography variant='h6' color={colors.greenAccent[100]}>
						Начните с файла
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
			)}
		</form>
	)
}
