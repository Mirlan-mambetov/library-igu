import { IBase } from './Base.interface'

export interface INews extends IBase {
	title: string
	description: string
	image: string
}
