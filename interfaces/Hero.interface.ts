import { IBase } from './base.interface'
import { IPage } from './page.interface'

export interface IHero extends IBase {
	title: string
	background?: string
	subcontent?: IHeroSubcontent[]
	image?: string
	page?: IPage
}

export interface IHeroSubcontent extends IBase {
	title: string
	description: string
	hero?: Pick<IHero, 'background' | 'createdAt' | 'id'>
}
