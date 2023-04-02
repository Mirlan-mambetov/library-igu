import { IElibraryBooks } from '../../../interfaces/elibrary.interface'
import { IITemsPaginate } from '../../../interfaces/paginate.interface'
import { elibraryApi } from '../../../store/api/elibrary/elibrary.api'
import { EmptyItems } from '../../EmptyItems/EmptyItems'
import Paginate from '../../Paginate/Paginate'
import { ElibraryFiles } from '../ElibraryFiles/ElibraryFiles'
import styles from './ElibraryFileList.module.scss'
import classNames from 'classnames'
import { FC, useState } from 'react'

export const ElibraryFileList: FC<{ categoryId: number }> = ({
	categoryId
}) => {
	const [page, setPage] = useState(1)
	const limit = 8

	const { data: books = {} as IITemsPaginate<IElibraryBooks> } =
		elibraryApi.useFetchBooksByCategoryQuery(
			{
				id: +categoryId,
				query: { page, limit }
			},
			{ skip: !categoryId }
		)

	const paginateHandler = ({ selected }: { selected: number }) => {
		setPage(selected + 1)
		// router.replace(`?page=${selected + 1}`)
	}

	return (
		<div className={styles.row}>
			{books.items && books.items.length ? (
				books.items?.map(book => <ElibraryFiles {...book} key={book.id} />)
			) : (
				<EmptyItems />
			)}
			{books?.items?.length && (
				<Paginate
					handler={paginateHandler}
					initialPage={page - 1}
					totalPage={books.meta ? books.meta.totalPages : 1}
				/>
			)}
		</div>
	)
}
