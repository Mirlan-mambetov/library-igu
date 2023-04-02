import {
	IInternetLink,
	IInternetLinkCategory
} from '../../interfaces/Internet-link-interface'
import { axiosBase } from '../api.config'

export const internetLinkService = {
	async findAllCategories() {
		return await axiosBase.get<IInternetLinkCategory[]>('/internet')
	},
	async findLinksByCategory(id: number) {
		return await axiosBase.get<IInternetLink[]>(`/internet/link/${id}`)
	},
	async findCategoryById(id: number) {
		return await axiosBase.get<IInternetLinkCategory>(`/internet/${id}`)
	}
}
