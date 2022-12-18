import { IBase } from './base.interface'
import { IPage } from './page.interface'

export interface IHero extends IBase {
	title: string
	background?: string
	subcontent?: IHeroSubcontent[]
	image?: string
	page?: IPage
	totalArticle?: number
	subContentOrientation?: 'row' | 'column'
	infoTitle?: string
}

export interface IHeroSubcontent extends IBase {
	title: string
	description: string
}
