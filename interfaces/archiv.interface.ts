import { IBase } from './Base.interface'
import { IPage } from './Page.interface'

export interface IArhivs extends IBase {
	name: string
	materials: Pick<IArhivsMaterials, 'id'>[]
	page?: IPage
}
export interface IArhivsMaterials extends IBase {
	authors: string
	description: string
	file: string
	downloaded?: number
	views?: number
	category: IArhivs
}
