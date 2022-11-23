import { UploadService } from '../../../../services/uploadService/uploadService'
import { ChangeEvent } from 'react'
import { useMutation } from 'react-query'

export const useUpload = (
	id: number,
	url: string,
	onChange: (...event: any) => void
) => {
	const { mutateAsync } = useMutation(
		'upload-file',
		(data: FormData) => UploadService.upload(id, url, data),
		{
			onSuccess: ({ data }) => {
				onChange(data)
			},
			onError: (error: any) => {
				alert(`${error}`)
			}
		}
	)

	const uploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files
		if (!file?.length) return

		const formData = new FormData()
		formData.append('file', file[0])

		await mutateAsync(formData)
	}
	return { uploadFile }
}
