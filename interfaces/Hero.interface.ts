import { IBase } from './Base.interface'
import { IPage } from './Page.interface'

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
