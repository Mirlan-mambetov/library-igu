import { IBase } from './base.interface'

export interface IHero extends IBase {
	title: string
	background?: string
	subcontent?: IHeroSubcontent[]
}

export interface IHeroSubcontent extends IBase {
	title: string
	description: string
}
