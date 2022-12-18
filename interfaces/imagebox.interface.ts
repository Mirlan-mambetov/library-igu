import { IBase } from './Base.interface'

export interface IImagebox extends IBase {
	title: string
	subtitle?: string
	image: string
	description: string
}
