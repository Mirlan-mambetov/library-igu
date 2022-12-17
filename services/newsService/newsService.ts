import { INews } from '../../interfaces/news.interface'
import { axiosBase } from '../api.config'

export const newsService = {
	async findAllNews() {
		return await axiosBase.get<INews[]>('/news/newses')
	},
	async findNewsById(id: number) {
		return await axiosBase.get<INews>(`/news/news/${id}`)
	},
	async findNewsOnLimit(limit: number) {
		return await axiosBase.get<INews[]>(`/news/news/limit?limit=${limit}`)
	}
}
