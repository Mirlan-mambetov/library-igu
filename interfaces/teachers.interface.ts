import { IBase } from './base.interface'

export interface ITeachersCategory extends IBase {
	name: string
	description: string
	works: ITeachersWorks[]
}

export interface ITeachersWorks extends IBase {
	authors: string
	description: string
	file: string
	downloaded: number
	views: number
	category: ITeachersCategory
}
