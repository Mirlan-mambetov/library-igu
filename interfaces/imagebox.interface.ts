import { IBase } from './base.interface'

export interface IImagebox extends IBase {
	title: string
	subTitle?: string
	image: string
	description: string
}
