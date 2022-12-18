import { ITeachersCategory } from '../../../interfaces/Teachers.interface'

export interface CategoryProps {
	category: ITeachersCategory[]
	categoryLink: string
	position?: 'fixed' | 'default'
	categoryTitle?: string
}
