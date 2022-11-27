import { IBase } from './base.interface'
import { IHero } from './hero.interface'
import { IJournal } from './journal.interface'

export interface IPage extends IBase {
	name: string
	hero: IHero[]
	journal: IJournal[]
}
