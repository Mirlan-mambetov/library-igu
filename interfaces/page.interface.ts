import { IArhivs } from './Archiv.interface'
import { IBase } from './Base.interface'
import { IHero } from './Hero.interface'
import { IJournal } from './Journal.interface'
import { ITabs } from './Tabs.interface'

export interface IPage extends IBase {
	name: string
	hero: IHero[]
	journal: IJournal[]
	tabs: ITabs[]
	vestnik: IArhivs[]
}
