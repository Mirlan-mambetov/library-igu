import { IBase } from './base.interface'

export interface INews extends IBase {
	title: string
	description: string
	image: string
}
