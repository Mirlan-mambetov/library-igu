import { IBase } from './base.interface'

export interface IElibrary extends IBase {
	name: string
	image: string
	secondCategory: IElibraryCategory[]
}
export interface IElibraryCategory extends IBase {
	name: string
	books: IElibraryBooks[]
}
export interface IElibraryBooks extends IBase {
	authors: string
	description: string
	published: number
	file: string
}
