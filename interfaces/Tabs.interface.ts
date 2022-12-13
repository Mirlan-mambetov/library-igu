import { IBase } from './base.interface'

export interface ITabs extends IBase {
	title: string
	description?: string
	isLink?: ITabsLink[]
}

export interface ITabsLink extends IBase {
	name: string
	link: string
}
