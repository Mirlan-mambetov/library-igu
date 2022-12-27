import { IBase } from './base.interface'

export interface IWindow extends IBase {
	name: string
	category: IWindowCategory[]
}
export interface IWindowCategory extends IBase {
	name: string
	file: string
}
