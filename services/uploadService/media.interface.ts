export interface IUpload {
	id?: number
	url?: string
	file: FormData
	setValue?: (val: number) => void
}
