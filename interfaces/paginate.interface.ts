export interface IPaginationDtoI {
	page?: number
	limit?: number
}
export interface IPaginationI {
	totalItems: number
	itemCount: number
	itemsPerPage: number
	totalPages: number
	currentPage: number
}
export interface IITemsPaginate<T> {
	items: T[]
	meta?: IPaginationI
}
