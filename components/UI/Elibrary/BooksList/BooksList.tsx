import { IElibraryBooksByCategory } from '../../../../interfaces/elibrary.interface'
import { IElibraryCategory } from '../../../../interfaces/elibrary.interface'
import { elibraryApi } from '../../../../store/api/elibrary/elibrary.api'
import { tokens } from '../../../../theme'
import { CreateFragment } from '../../../Form/CreateFragment/CreateFragment'
import { UpdateFragment } from '../../../Form/UpdateFragment/UpdateFragment'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import dayjs from 'dayjs'
import Link from 'next/link'
import { ChangeEvent, FC, useState } from 'react'

const BooksList: FC<{ category: Pick<IElibraryCategory, 'name' | 'id'> }> = ({
	category
}) => {
	const [page, setPage] = useState(1)
	const limit = 5

	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	const { data: books = {} as IElibraryBooksByCategory } =
		elibraryApi.useFetchBooksByCategoryQuery(
			{ id: category.id, query: { page, limit } },
			{ skip: !category.id }
		)

	const [deleteBook] = elibraryApi.useDeleteElibraryBookMutation()

	const paginateHandler = async (e: ChangeEvent<unknown>, page: number) => {
		setPage(page)
	}
	return (
		<Box color={colors.primary[600]}>
			<Box color={colors.primary[500]}>
				<Typography variant='h4'>Категория: {category.name}</Typography>
				<Typography variant='subtitle1'>
					Всего книг в данной категории: {books?.meta?.totalItems}
				</Typography>
			</Box>
			<CreateFragment fragmentCreate='CreateElibraryBook' id={category.id} />
			{books.items ? (
				books.items.map((book) => (
					<Box
						key={book.id}
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: '4px',
							border: `1px solid ${colors.greenAccent[300]}`,
							my: '10px',
							p: '10px'
						}}
					>
						<Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
							<Typography
								variant='h5'
								sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}
							>
								<span style={{ fontSize: '10px' }}>авторы:</span>
								{book.authors}
							</Typography>
						</Box>
						<Box color={colors.primary[700]}>
							<Typography
								sx={{
									my: '10px',
									display: 'flex',
									gap: '20px'
								}}
								variant='subtitle1'
							>
								<span style={{ fontSize: '10px' }}>название:</span>
								{!book.name ? (
									<span style={{ fontSize: '10px' }}>пусто</span>
								) : (
									book.name
								)}
							</Typography>
							<Typography
								sx={{
									my: '10px',
									display: 'flex',
									gap: '20px'
								}}
								variant='subtitle1'
							>
								<span style={{ fontSize: '10px' }}>описание:</span>
								{!book.description ? (
									<span style={{ fontSize: '10px' }}>пусто</span>
								) : (
									book.description
								)}
							</Typography>
							<Link
								style={{ fontSize: '14px', textDecoration: 'underline' }}
								href={`${process.env.NEXT_PUBLIC_APP_STATIC}${book.file}`}
								target={'_blank'}
							>
								файл
							</Link>
						</Box>
						<Box
							sx={{
								display: 'flex',
								gap: '14px',
								alignItems: 'center',
								mt: '10px',
								fontSize: '10px'
							}}
							color={colors.greenAccent[600]}
						>
							<span>категория: {book.category.name}</span>
							<span>скачено: {book.downloaded}</span>
							<span>просмотров: {book.views}</span>
						</Box>
						<Box sx={{ display: 'flex', gap: '20px', fontSize: '10px' }}>
							<time style={{ display: 'flex', gap: '10px' }}>
								<span>дата добавления:</span>
								{dayjs(book.createdAt).format('YYYY-MM-D HH:mm:ss')}
							</time>
							<Link
								href={`${process.env.NEXT_PUBLIC_APP_STATIC}${book.file}`}
								target='_blank'
							>
								Файл
							</Link>
						</Box>
						<Box sx={{ display: 'flex', gap: '10px' }}>
							<UpdateFragment
								fragmentUpdate='UpdateElibraryBook'
								id={book.id}
							/>
							<Button color='warning' onClick={() => deleteBook(book.id)}>
								Удалить
							</Button>
						</Box>
					</Box>
				))
			) : (
				<span>нет данных...</span>
			)}
			<Box sx={{ my: '20px' }}>
				<Stack spacing={2} sx={{ py: '10px' }} bgcolor={colors.grey[400]}>
					<Pagination
						defaultPage={1}
						count={books?.meta?.totalPages}
						color='secondary'
						page={page}
						onChange={paginateHandler}
						showFirstButton
						showLastButton
					/>
				</Stack>
			</Box>
		</Box>
	)
}

export default BooksList
