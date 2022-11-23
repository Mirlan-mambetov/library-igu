import { MyModalContext } from '../../../contexts/MyModal.context'
import { heroApi } from '../../../store/api/hero/hero.api'
import { Field } from '../../UI'
import { IHeroDto } from './Hero.dto'
import Button from '@mui/material/Button'
import { FC, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export const HeroForm: FC = () => {
	const { updateId, onClose } = useContext(MyModalContext)
	const [updateHero, { isSuccess, error }] = heroApi.useUpdateHeroMutation()
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<IHeroDto>({ mode: 'onChange' })
	const onSubmit: SubmitHandler<IHeroDto> = async (data) => {
		updateHero({ ...data, id: updateId })
			.unwrap()
			.then(() => {
				reset()
				onClose()
			})
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Field
				{...register('title')}
				placeholder='Текст на главном экране'
				error={errors.title}
			/>
			<Button color='success' size='small' type='submit'>
				Редактировать
			</Button>
		</form>
	)
}
