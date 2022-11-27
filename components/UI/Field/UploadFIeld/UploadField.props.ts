import { IUpload } from '../../../../services/uploadService/media.interface'
import { Dispatch, SetStateAction } from 'react'

export interface IUploadFieldProps {
	id: number
	url: string
	onChange: (...event: any) => void
	setIsChosen?: Dispatch<SetStateAction<boolean>>
	setValue: (val: number) => void
	isUploaded: boolean
	method: string
	typeFile: string
	percent: number
}
