import { axiosBase } from '../../api/axios'
import { IArhivs } from '../../interfaces/arhivs.interface'

export const archivService = {
	async getArchivs() {
		return await axiosBase.get<IArhivs[]>('/vestnik')
	}
}
