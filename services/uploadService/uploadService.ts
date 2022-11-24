import { axiosBase } from '../../api/axios'
import { IHero } from '../../interfaces/hero.interface'
import { IUpload } from './media.interface'

// import { IMediaResponse } from './media.interface'

export const UploadService = {
	async upload({ id, file, url }: IUpload) {
		return axiosBase.put<IHero>(`/${url}/${id}`, file, {
			headers: { 'Content-Type': 'multipart/form-data' }
		})
	}
}
