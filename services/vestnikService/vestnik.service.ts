import { IArhivs } from '../../interfaces/Archiv.interface'
import { axiosBase } from '../api.config'

export const vestnikService = {
	async getAllArchivs() {
		return await axiosBase.get<IArhivs[]>('/vestnik')
	},
	async getArchivById(id: number) {
		return await axiosBase.get<IArhivs>(`/vestnik/${id}`)
	}
}
