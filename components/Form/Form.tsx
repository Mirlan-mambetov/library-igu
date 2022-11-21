import { MyModalContext } from '../../contexts/MyModal.context'
import { HeroForm } from './HeroForm/HeroForm'
import { FC, useContext } from 'react'

export const Form: FC = () => {
	const { updateName } = useContext(MyModalContext)
	switch (updateName) {
		case 'UpdateHero':
			return <HeroForm />
		default:
			return <h1>Неккоретный путь обновления</h1>
	}
}
