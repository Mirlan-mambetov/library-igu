import { MyModalContext } from '../../../contexts/MyModal.context'
import { heroApi } from '../../../store/api/hero/hero.api'
import { Field } from '../../UI'
import { IHeroDto } from './Hero.dto'
import { ChangeEvent, FC, useContext, useState } from 'react'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { UploadField } from '../../UI/Field/UploadFIeld/UploadField'

export const HeroForm: FC = () => {
	const { updateId } = useContext(MyModalContext)
	const [updateHero, { isSuccess, error }] = heroApi.useUpdateHeroMutation()
	const [file, setFile] = useState<any>()
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
		control
	} = useForm<IHeroDto>({ mode: 'onChange' })
	const onSubmit: SubmitHandler<IHeroDto> = async (data) => {
		const formData = new FormData()
		formData.append("background", file[0])
			updateHero({...data, background: formData.get("background"), id: updateId })
			.unwrap()
			.then(() => reset())
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Field
				{...register('title')}
				placeholder='Заголовок HERO'
				error={error}
			/>
			<Box sx={{my: "10px", px: "12px"}}>
			<Controller
				name={"background"}
				control={control}
				render={({field: {onChange}}) => (
					<Field
					{...register('background')}
					placeholder='Выберите файл'
					type="file"
					onChange={(e) => onChange(setFile(e.target?.files))}
				/>)}
      />
			</Box>
			<Button
					color='success'
					size='small'
					type='submit'
					>
						Редактировать
			</Button>
		</form>
	)
}
