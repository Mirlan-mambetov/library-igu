import { getContentType } from '../utils/api.utils'
import axios from 'axios'

export const APP_URI = process.env.NEXT_PUBLIC_API_URI
export const axiosBase = axios.create({
	baseURL: APP_URI,
	headers: getContentType()
})
