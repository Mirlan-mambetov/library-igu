
export const formatDate = (date: any, options?: string) => {
	const d = new Date(date)

	const month = d.toLocaleString('ru-RU', {month: "short"})
	const year = d.getFullYear()

	return `${month} ${year}`
}		
