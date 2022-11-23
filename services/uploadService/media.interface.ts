export interface IUpload {
	id: number
	url: string
	file?: FormData
	onChange: (...event: any) => void
}
