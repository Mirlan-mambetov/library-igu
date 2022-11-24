import { MyModalContext } from '../../contexts/MyModal.context'
import { CreateHero } from './HeroForm/CreateHero/CreateHero'
import { HeroForm } from './HeroForm/HeroForm'
import { UpdateHeroImageForm } from './HeroForm/UpdateHeroImageForm'
import { PageForm } from './PageForm/PageForm'
import { FC, useContext } from 'react'

export const Form: FC = () => {
	const { updateName } = useContext(MyModalContext)
	switch (updateName) {
		case 'UpdateHero':
			return <CreateHero />
		// case 'UpdateHero':
		// 	return <HeroForm />
		// case 'UpdateHeroImage':
		// 	return <UpdateHeroImageForm />
		case 'CreatePage':
			return <PageForm />
		default:
			return <h1>Неккоретный путь обновления</h1>
	}
}
