import { IBase } from './base.interface'

export interface IElibraryCategory extends IBase {
	name: string
	image: string
	secondCategory: IElibrarySecondCategory[]
}
export interface IElibrarySecondCategory extends IBase {
	name: string
	books: IElibraryBooks[]
}
export interface IElibraryBooks extends IBase {
	authors: string
	description: string
	published: number
	downloaded: number
	views: number
	file: string
}
