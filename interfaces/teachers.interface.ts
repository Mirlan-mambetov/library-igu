import { IBase } from './base.interface'

export interface ITeachers extends IBase {
	name: string
	description: string
	works: ITeachersWork[]
}
export interface ITeachersWork extends IBase {
	authors: string
	description: string
	file: string
	category: ITeachers
	downloaded?: number
	views?: number
}

export interface ITeachersWorkByCategory {
	items: ITeachersWork[]
	meta?: {
		totalItems: number
		itemCount: number
		itemsPerPage: number
		totalPages: number
		currentPage: number
	}
}
