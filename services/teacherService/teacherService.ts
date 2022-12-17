import {
	ITeachersCategory,
	ITeachersWorks
} from '../../interfaces/teachers.interface'
import { axiosBase } from '../api.config'

export const teacherService = {
	async fetchAllCategories() {
		return await axiosBase.get<ITeachersCategory[]>('/teachers')
	},
	async fetchCategoyById(id: number) {
		return await axiosBase.get<ITeachersCategory>(`/teachers/${id}`)
	}
}
