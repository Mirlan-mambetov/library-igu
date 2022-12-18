import { IBase } from './Base.interface'

export interface IAboutOwner extends IBase {
	name: string
	phone: string
	email: string
	image: string
}
export interface IAboutTablo extends IBase {
	ceils: number
	description: string
}

export interface IAboutInfo extends IBase {
	title?: string
	description?: string
	image?: string
}
