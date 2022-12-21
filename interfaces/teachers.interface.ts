import { IBase } from './base.interface'
import { IPaginationI } from './pagination.meta.interface'

export interface ITeachers extends IBase {
	name: string
	description: string
	works: ITeachersWork[]
}
export interface ITeachersWork extends IBase {
	authors: string
	name: string
	description: string
	file: string
	category: ITeachers
	downloaded?: number
	views?: number
}

export interface ITeachersWorkByCategory {
	items: ITeachersWork[]
	meta?: IPaginationI
}
