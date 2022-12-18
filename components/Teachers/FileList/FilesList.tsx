import { IITemsPaginate } from '../../../interfaces/paginate.interface'
import { ITeachersWorks } from '../../../interfaces/teachers.interface'
import { teachersApi } from '../../../store/api/teachers/teachers.api'
import Paginate from '../../Paginate/Paginate'
import { TeachersFiles } from '../Files/Files'
import styles from './Files.module.scss'
import { FC, useState } from 'react'

export const TeachersFileList: FC<{
	categoryId: number
}> = ({ categoryId }): JSX.Element => {
	const [page, setPage] = useState(1)
	const limit = 8
	const { data: works = {} as IITemsPaginate<ITeachersWorks> } =
		teachersApi.useFetchWorksByCategoryQuery(
			{
				id: categoryId,
				query: {
					page,
					limit
				}
			},
			{ skip: !categoryId }
		)

	const paginateHandler = ({ selected }: { selected: number }) => {
		setPage(selected + 1)
		// router.replace(`?page=${selected + 1}`)
	}

	return (
		<div className={styles.row}>
			{works.items?.map((work) => (
				<TeachersFiles {...work} key={work.id} />
			))}
			<Paginate
				handler={paginateHandler}
				initialPage={page - 1}
				totalPage={works.meta ? works.meta.totalPages : 1}
			/>
		</div>
	)
}
