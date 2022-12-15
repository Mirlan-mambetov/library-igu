import { SubcontentI } from '../../Interfaces/Hero.interface'
import { DetailsHTMLAttributes } from 'react'

export interface HeroProps extends DetailsHTMLAttributes<HTMLDivElement> {
	title?: string
	background?: string
	subTitle?: string
	subContent?: SubcontentI[]
	information?: number
	subContentOrientation?: 'row' | 'column'
	button?: boolean
}
export const defaultBackground =
	'https://res.cloudinary.com/djzubalr7/image/upload/v1665219599/Library-igu/background-default_z6g7u1.png'
