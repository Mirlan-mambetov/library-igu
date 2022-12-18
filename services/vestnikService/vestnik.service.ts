import { IArhivs } from '../../interfaces/archiv.interface'
import { axiosBase } from '../api.config'

export const vestnikService = {
	async getAllArchivs() {
		return await axiosBase.get<IArhivs[]>('/vestnik')
	},
	async getArchivById(id: number) {
		return await axiosBase.get<IArhivs>(`/vestnik/${id}`)
	}
}
