import dayjs from 'dayjs'

export const formatDate = (date: any, options: string) => {
	return dayjs(date).format(`${options}`)
}
