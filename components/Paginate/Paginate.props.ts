export interface PaginateProps {
	totalPage: number
	handler: ({ selected }: { selected: number }) => void
	initialPage: number
}
