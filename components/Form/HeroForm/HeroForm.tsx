import { MyModalContext } from '../../../contexts/MyModal.context'
import { IHero } from '../../../interfaces/hero.interface'
import { heroApi } from '../../../store/api/hero/hero.api'
import { Field } from '../../UI'
import { IHeroDto } from './Hero.dto'
import { FC, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export const HeroForm: FC = () => {
	const { updateId } = useContext(MyModalContext)
	const [updateHero, { isSuccess }] = heroApi.useUpdateHeroMutation()

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
		watch
	} = useForm<IHeroDto>({ mode: 'onChange' })

	const backGroundPath = watch('background')

	const onSubmit: SubmitHandler<IHeroDto> = data => {
		updateHero({ ...data, id: updateId })
			.unwrap()
			.then(() => reset())
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Field
				{...register('title', {
					required: 'Название обязательно'
				})}
				placeholder='Name'
			/>
		</form>
	)
}
