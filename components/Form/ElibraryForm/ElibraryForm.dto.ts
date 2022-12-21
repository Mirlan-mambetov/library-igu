export interface ElibraryDto {
	name: string
	image: FileList
}
export interface ElibraryCategoryDto {
	name: string
}
export interface ElibraryBookDto {
	authors: string
	name: string
	description?: string
	published: string
	file: FileList
}
