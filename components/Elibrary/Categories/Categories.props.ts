import { IElibraryCategory } from '../../../interfaces/Elibrary.interface'

export interface CategoriesProps {
	data: IElibraryCategory[]
	categoryLink: string
	position?: 'row' | 'column'
	categoryTitle: string
}
