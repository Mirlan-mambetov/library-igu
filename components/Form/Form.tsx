import { MyModalContext } from '../../contexts/MyModal.context'
import { CreateHeroSubcontent } from './HeroForm/CreateSubContent/CreateSubContent'
import { UpdateHero } from './HeroForm/UpdateHero/UpdateHero'
import { UpdateHeroSubcontent } from './HeroForm/UpdateHeroSubcontent/UpdateHeroSubcontent'
import { PageForm } from './PageForm/PageForm'
import { UpdateJournal } from './UpdateJournalForm/UpdateJournalForm'
import { UpdateJournalHead } from './UpdateJournalHead/UpdateJournalHead'
import { UpdateJournalHeadItems } from './UpdateJournalHeadItems/UpdateJournalHeadItems'
import { FC, useContext } from 'react'

export const Form: FC = () => {
	const { updateName } = useContext(MyModalContext)
	switch (updateName) {
		case 'UpdateHero':
			return <UpdateHero />
		case 'UpdateHeroSubcontent':
			return <UpdateHeroSubcontent />
		case 'CreateHeroSubcontent':
			return <CreateHeroSubcontent />
		case 'UpdateJournal':
			return <UpdateJournal />
		case 'UpdateJournalHead':
			return <UpdateJournalHead />
		case 'UpdateJournalHeadItems':
			return <UpdateJournalHeadItems />
		case 'CreatePage':
			return <PageForm />
		default:
			return (
				<h1>
					Ошибка в стейтменеджменте приложения я не знаю как исправить ошибку.
					Нужно обратится к создателям..
				</h1>
			)
	}
}
