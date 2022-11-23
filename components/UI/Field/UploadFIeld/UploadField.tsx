import { IUpload } from '../../../../services/uploadService/media.interface'
import { useUpload } from './UseUpload'
import { FC } from 'react'

export const UploadField: FC<IUpload> = ({ id, url, onChange }) => {
	const { uploadFile } = useUpload(id, url, onChange)
	return (
		<div>
			<label>
				<span>Выбери файл</span>
				<input type='file' onChange={uploadFile} />
			</label>
		</div>
	)
}
