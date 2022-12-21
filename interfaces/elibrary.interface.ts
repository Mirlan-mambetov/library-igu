import { IBase } from './base.interface'

export interface IElibraryCategory extends IBase {
	name: string
	image: string
	secondCategory: IElibrarySecondCategory[]
}
export interface IElibrarySecondCategory extends IBase {
	name: string
	books: IElibraryBooks[]
	category: IElibraryCategory
}
export interface IElibraryBooks extends IBase {
	authors: string
	name: string
	description: string
	published: number
	downloaded: number
	views: number
	file: string
	category: IElibrarySecondCategory
}
