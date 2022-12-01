import { IBase } from './base.interface'
import { IPage } from './page.interface'

export interface IArhivs extends IBase {
	name: string
	page?: IPage
}
export interface IArhivsMaterials extends IBase {
	authors: string
	description: string
	file: string
	downloaded?: number
	views?: number
	category: IArhivs
	meta: {
		totalItems: number
		itemCount: number
		itemsPerPage: number
		totalPages: number
		currentPage: number
	}
}
