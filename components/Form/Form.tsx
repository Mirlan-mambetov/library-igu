import { MyModalContext } from '../../contexts/MyModal.context'
import { HeroForm } from './HeroForm/HeroForm'
import { UpdateHeroImageForm } from './HeroForm/UpdateHeroImageForm'
import { FC, useContext } from 'react'
import { PageForm } from './PageForm/PageForm'

export const Form: FC = () => {
	const { updateName } = useContext(MyModalContext)
	switch (updateName) {
		case 'UpdateHero':
			return <HeroForm />
		case 'UpdateHeroImage':
			return <UpdateHeroImageForm />
		case 'CreatePage':
			return <PageForm />
		default:
			return <h1>Неккоретный путь обновления</h1>
	}
}
