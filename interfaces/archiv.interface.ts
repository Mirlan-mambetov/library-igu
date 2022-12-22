import { IBase } from './base.interface'
import { IPage } from './page.interface'

export interface IArhivs extends IBase {
	name: string
	materials: Pick<IArhivsMaterials, 'id'>[]
	page?: IPage
}
export interface IArhivsMaterials extends IBase {
	authors: string
	name: string
	description: string
	file: string
	downloaded?: number
	views?: number
	category: IArhivs
}
