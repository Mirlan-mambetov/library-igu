import { IBase } from './base.interface'

export interface IInternetLinkCategory extends IBase {
	name: string
	categories: IInternetLink[]
}
export interface IInternetLink extends IBase {
	name: string
	link: string
	description: string
	transitions: number
}
