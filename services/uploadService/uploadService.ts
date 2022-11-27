import { axiosBase } from '../../api/axios'

export const UploadService = {
	async upload(
		id: number,
		url: string,
		setValue: (val: number) => void,
		file: FormData,
		method: string
	) {
		return await axiosBase({
			method: `${method}`,
			url: `/${url}/${id}`,
			data: file,
			headers: { 'Content-Type': 'multipart/form-data' },
			onUploadProgress: (ProgressEvent) => {
				if (setValue) {
					const progress = (ProgressEvent.loaded / ProgressEvent.total) * 100
					setValue(Math.ceil(progress))
				}
			}
		})
	}
}

// post<IHero>(`/${url}/${id}`, file, {
// 	headers: { 'Content-Type': 'multipart/form-data' },
// 	onUploadProgress: (ProgressEvent) => {
// 		if (setValue) {
// 			// @ts-ignore
// 			const progress = (ProgressEvent.loaded / ProgressEvent.total) * 100
// 			setValue(Math.ceil(progress))
// 		}
// 	}
// })
