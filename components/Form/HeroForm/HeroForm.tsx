import { MyModalContext } from '../../../contexts/MyModal.context'
import { IHero } from '../../../interfaces/hero.interface'
import { heroApi } from '../../../store/api/hero/hero.api'
import { Field } from '../../UI'
import { IHeroDto } from './Hero.dto'
import { FC, useContext } from 'react'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

export const HeroForm: FC = () => {
	const { updateId } = useContext(MyModalContext)
	const [updateHero, { isSuccess }] = heroApi.useUpdateHeroMutation()

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
		watch,
		control
	} = useForm<IHeroDto>({ mode: 'onChange' })

	const backGroundPath = watch('background')

	const onSubmit: SubmitHandler<IHeroDto> = data => {
		// updateHero({ ...data, id: updateId })
		// 	.unwrap()
		// 	.then(() => reset())
		console.log(data)		
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Field
				{...register('title', {
					required: 'Название обязательно'
				})}
				placeholder='Заголовок HERO'
				error={errors.title}
			/>
			<Box sx={{my: "10px", px: "12px"}}>
			<Field
				{...register('background')}
				type="file"
				error={errors.background}
				placeholder="Выберите файл"
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
