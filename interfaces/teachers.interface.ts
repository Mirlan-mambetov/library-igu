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
}
