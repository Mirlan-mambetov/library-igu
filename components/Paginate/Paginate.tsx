import styles from './Paginate.module.scss'
import { PaginateProps } from './Paginate.props'
import { FC, useState } from 'react'
import { GrPrevious, GrNext } from 'react-icons/gr'
import ReactPaginate from 'react-paginate'

const Paginate: FC<PaginateProps> = ({ totalPage, handler, initialPage }) => {
	return (
		<ReactPaginate
			initialPage={initialPage}
			breakLabel='...'
			onPageChange={handler}
			pageRangeDisplayed={5}
			pageCount={totalPage}
			marginPagesDisplayed={2}
			nextLabel={<GrNext style={{ fontSize: 18, width: 150 }} />}
			previousLabel={<GrPrevious style={{ fontSize: 18, width: 150 }} />}
			activeClassName={styles.active}
			containerClassName={styles.pagination}
			breakLinkClassName={styles.pageLink}
			pageClassName={styles.pageIitem}
			pageLinkClassName={styles.pageLink}
			previousClassName={styles.pageIitem}
			previousLinkClassName={styles.pageLink}
			nextClassName={styles.pageIitem}
			nextLinkClassName={styles.pageLink}
		/>
	)
}

export default Paginate
