import { IArhivs } from './archiv.interface'
import { IBase } from './base.interface'
import { IHero } from './hero.interface'
import { IJournal } from './journal.interface'
import { ITabs } from './tabs.interface'

export interface IPage extends IBase {
	name: string
	hero: IHero[]
	journal: IJournal[]
	tabs: ITabs[]
	vestnik: IArhivs[]
}
