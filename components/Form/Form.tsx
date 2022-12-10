import { MyModalContext } from '../../contexts/MyModal.context'
import UpdateAboutInfo from './About/AboutInfo/UpdateAboutInfo'
import UpdateAboutOwner from './About/AboutOwner/UpdateAboutOwner'
import UpdateAboutTablo from './About/AboutTablo/UpdateAboutTablo'
import { ArchivCreateMaterial } from './ArchivForm/ArchivCreateMaterials/ArchivCreateMaterial'
import { ArchivUpdateMaterial } from './ArchivForm/ArchivUpdateMaterials/ArchivUpdateMaterials'
import { CreateArhiv } from './ArchivForm/CreateArhiv'
import { UpdateArhiv } from './ArchivForm/UpdateArchiv'
import { UpdateArrivalImage } from './ArrivalForm/UpdateArrivalImage'
import { CreateHeroSubcontent } from './HeroForm/CreateSubContent/CreateSubContent'
import { UpdateHero } from './HeroForm/UpdateHero/UpdateHero'
import { UpdateHeroSubcontent } from './HeroForm/UpdateHeroSubcontent/UpdateHeroSubcontent'
import { UpdateJournal } from './JournalForm/UpdateJournalForm/UpdateJournalForm'
import { UpdateJournalHead } from './JournalForm/UpdateJournalHead/UpdateJournalHead'
import { UpdateJournalHeadItems } from './JournalForm/UpdateJournalHeadItems/UpdateJournalHeadItems'
import { CreateNews } from './NewsForm/CreateNews'
import { UpdateNews } from './NewsForm/UpdateNews'
import { PageForm } from './PageForm/PageForm'
import { CreatePartnerLink } from './PartnerForm/CreatePartnerLink'
import { UpdatePartnerLink } from './PartnerForm/UpdatePartnerLink'
import { UpdateTab } from './TabForm/UpdateTab/UpdateTab'
import { UpdateTabLink } from './TabForm/UpdateTabLink/UpdateTabLink'
import { CreateTeachersCategory } from './TeachersForm/CreateTeachersCategory'
import { CreateTeachersWork } from './TeachersForm/CreateTeachersWork'
import { UpdateTeachersCategory } from './TeachersForm/UpdateTeachersCategory'
import { UpdateTeachersWork } from './TeachersForm/UpdateTeachersWork'
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
		case 'UpdateArchiv':
			return <UpdateArhiv />
		case 'CreateArchivMaterial':
			return <ArchivCreateMaterial />
		case 'UpdateArchivMaterial':
			return <ArchivUpdateMaterial />
		case 'CreateNews':
			return <CreateNews />
		case 'UpdateNews':
			return <UpdateNews />
		case 'UpdateArrivalImage':
			return <UpdateArrivalImage />
		case 'CreateTeachersCategory':
			return <CreateTeachersCategory />
		case 'UpdateTeachersCategory':
			return <UpdateTeachersCategory />
		case 'CreateTeachersWork':
			return <CreateTeachersWork />
		case 'UpdateTeachersWork':
			return <UpdateTeachersWork />
		case 'CreatePartnerLink':
			return <CreatePartnerLink />
		case 'UpdatePartnerLink':
			return <UpdatePartnerLink />
		case 'UpdateAboutInfo':
			return <UpdateAboutInfo />
		case 'UpdateAboutOwner':
			return <UpdateAboutOwner />
		case 'UpdateAboutTablo':
			return <UpdateAboutTablo />
		case 'CreatePage':
			return <PageForm />
		default:
			return <></>
	}
}
