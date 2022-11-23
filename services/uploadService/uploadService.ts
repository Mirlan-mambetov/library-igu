import { axiosBase } from '../../api/axios'
import { IHero } from '../../interfaces/hero.interface'

// import { IMediaResponse } from './media.interface'

export const UploadService = {
	async upload(id: number, url: string, file: FormData) {
		return axiosBase.put<IHero>(`/${url}/${id}`, file, {
			headers: { 'Content-Type': 'multipart/form-data' }
		})
	}
}
