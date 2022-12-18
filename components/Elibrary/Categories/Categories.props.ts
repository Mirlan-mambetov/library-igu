import { IElibraryCategory } from '../../../interfaces/elibrary.interface'

export interface CategoriesProps {
	data: IElibraryCategory[]
	categoryLink: string
	position?: 'row' | 'column'
	categoryTitle: string
}
