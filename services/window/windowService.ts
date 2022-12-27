import { IWindow, IWindowCategory } from '../../interfaces/window.interface'
import { axiosBase } from '../api.config'

export const windowService = {
	async getAllMainCategories() {
		return await axiosBase.get<IWindow[]>('/window')
	},
	async getMainCategoryById(id: number) {
		return await axiosBase.get<IWindow>(`/window/${id}`)
	},
	async getCategoriesById(id: number) {
		return await axiosBase.get<IWindowCategory[]>(
			`/window/category/category/${id}`
		)
	}
}
