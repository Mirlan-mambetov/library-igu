import { ITeachers } from '../../../interfaces/teachers.interface'
import { teachersApi } from '../../../store/api/teachers/teachers.api'
import { tokens } from '../../../theme'
import { CreateFragment } from '../../Form/CreateFragment/CreateFragment'
import TeachersItem from './TeachersItem/TeachersItem'
import { Box, Stack, Pagination, useTheme, Typography } from '@mui/material'
import { ChangeEvent, FC, useState } from 'react'

const TeachersList: FC<{ data: ITeachers }> = ({ data }) => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const [page, setPage] = useState(1)

	const { data: works } = teachersApi.useFetchWorksByCategoryQuery(
		{ id: data.id, query: { page } },
		{
			skip: !data.id
		}
	)

	const paginateHandler = async (e: ChangeEvent<unknown>, page: number) => {
		setPage(page)
	}
	return (
		<div>
			<Box sx={{ display: 'flex', gap: '20px', alignItems: 'baseline' }}>
				<Box>
					<Typography variant='subtitle1' color={colors.greenAccent[600]}>
						Категория: {data.name}
					</Typography>
					<Typography variant='subtitle2' color={colors.greenAccent[600]}>
						Всего материалов: {data?.works.length}
					</Typography>
				</Box>
				<CreateFragment fragmentCreate='CreateTeachersWork' id={data.id} />
			</Box>
			{works?.items.length ? (
				<TeachersItem works={works.items} />
			) : (
				<span
					style={{
						color: colors.redAccent[400],
						margin: '20px 0px',
						display: 'block'
					}}
				>
					Категория пуста
				</span>
			)}
			<Box sx={{ my: '20px' }}>
				<Stack spacing={2} sx={{ py: '10px' }} bgcolor={colors.grey[400]}>
					<Pagination
						defaultPage={1}
						count={works?.meta?.totalPages}
						color='secondary'
						page={page}
						onChange={paginateHandler}
						showFirstButton
						showLastButton
					/>
				</Stack>
			</Box>
		</div>
	)
}

export default TeachersList
