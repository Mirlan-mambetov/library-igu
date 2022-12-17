import { ITeachersCategory } from '../../../interfaces/teachers.interface'

export interface CategoryProps {
	category: ITeachersCategory[]
	categoryLink: string
	position?: 'fixed' | 'default'
	categoryTitle?: string
}
