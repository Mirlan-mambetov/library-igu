import {
	IElibraryCategory,
	IElibrarySecondCategory
} from '../../interfaces/elibrary.interface'
import { axiosBase } from '../api.config'

export const elibraryService = {
	async fetchAllMainCategories() {
		return await axiosBase.get<IElibraryCategory[]>('/elibrary')
	},
	async fetchMainCategoryById(id: number) {
		return await axiosBase.get<IElibraryCategory>(`/elibrary/${id}`)
	},
	async fetchAllSecondCategories() {
		return await axiosBase.get<IElibrarySecondCategory[]>('/elibrary/category')
	},
	async fetchSecondCategoryById(id: number) {
		return await axiosBase.get<IElibrarySecondCategory>(
			`/elibrary/category/category/${id}`
		)
	}
}
