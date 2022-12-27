import { IBase } from './base.interface'
import { IPaginationI } from './pagination.meta.interface'

export interface IElibrary extends IBase {
	name: string
	image: string
	secondCategory: IElibraryCategory[]
}
export interface IElibraryCategory extends IBase {
	name: string
	books: IElibraryBooks[]
	category: Pick<IElibrary, 'id' | 'name' | 'image'>
}
export interface IElibraryBooks extends IBase {
	authors: string
	name: string
	description: string
	published: number
	file: string
	downloaded?: number
	views?: number
	category: Pick<IElibraryCategory, 'id' | 'name' | 'category'>
}
export interface IElibraryBooksByCategory {
	items: IElibraryBooks[]
	meta?: IPaginationI
}
export interface IElibraryRemaining extends IBase {
	image: string
}
