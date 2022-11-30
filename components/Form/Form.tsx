import { MyModalContext } from '../../contexts/MyModal.context'
import { CreateArhiv } from './ArchivForm/CreateArhiv'
import { CreateHeroSubcontent } from './HeroForm/CreateSubContent/CreateSubContent'
import { UpdateHero } from './HeroForm/UpdateHero/UpdateHero'
import { UpdateHeroSubcontent } from './HeroForm/UpdateHeroSubcontent/UpdateHeroSubcontent'
import { UpdateJournal } from './JournalForm/UpdateJournalForm/UpdateJournalForm'
import { UpdateJournalHead } from './JournalForm/UpdateJournalHead/UpdateJournalHead'
import { UpdateJournalHeadItems } from './JournalForm/UpdateJournalHeadItems/UpdateJournalHeadItems'
import { PageForm } from './PageForm/PageForm'
import { UpdateTab } from './TabForm/UpdateTab/UpdateTab'
import { UpdateTabLink } from './TabForm/UpdateTabLink/UpdateTabLink'
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
		case 'UpdateTab':
			return <UpdateTab />
		case 'UpdateTabLink':
			return <UpdateTabLink />
		case 'CreateArhiv':
			return <CreateArhiv />
		case 'CreatePage':
			return <PageForm />
		default:
			return <></>
	}
}
