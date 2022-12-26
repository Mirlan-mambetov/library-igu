import { IconType } from 'react-icons'

export interface IMenuItem {
	name: string
	link: string
	icon?: IconType
	disabled?: boolean
	new?: boolean
}
