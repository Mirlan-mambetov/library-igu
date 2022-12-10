import { IBase } from './base.interface'

export interface IImageCard extends IBase {
	title: string
	subtitle: string
	description: string
	image: string
}
