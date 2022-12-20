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
							<Typography variant='h5'>{book.authors}</Typography>
							<Typography variant='subtitle1'>{book.description}</Typography>
						</Box>
						<Box
							sx={{ display: 'flex', flexDirection: 'column', gap: '3px' }}
							color={colors.greenAccent[700]}
						>
							<Typography variant='subtitle2'>
								категория: {book.category.name}
							</Typography>
							<Typography variant='subtitle2'>
								год издания: {book.published}
							</Typography>
							<Typography variant='subtitle2'>
								главная категория: {book.category.category.name}
							</Typography>
						</Box>
						<Box sx={{ display: 'flex', gap: '20px' }}>
							<time style={{ display: 'flex', gap: '10px' }}>
								<span>дата добавления:</span>
								{dayjs(book.createdAt).format('YYYY-MM HH:mm:ss')}
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
