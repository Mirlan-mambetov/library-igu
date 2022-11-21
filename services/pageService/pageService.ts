import { axiosBase } from '../../api/axios'
import { IPage } from '../../interfaces/page.interface'

export const pageService = {
	async fetchAllPages() {
		return await axiosBase.get<IPage[]>('/page')
	}
}
