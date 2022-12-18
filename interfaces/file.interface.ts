import { IBase } from './base.interface'

export interface IFile extends IBase {
	authors: string
	description: string
	file: string
	downloaded?: number
	views?: number
	category: IFileCategory
}
interface IFileCategory {
	name: string
}
