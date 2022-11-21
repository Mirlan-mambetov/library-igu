import { IBase } from './base.interface'
import { IHero } from './hero.interface'

export interface IPage extends IBase {
	name: string
	hero: IHero[]
}
