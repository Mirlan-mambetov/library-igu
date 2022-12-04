import { ITeachers } from '../../../interfaces/teachers.interface'
import { teachersApi } from '../../../store/api/teachers/teachers.api'
import { tokens } from '../../../theme'
import { CreateFragment } from '../../Form/CreateFragment/CreateFragment'
import { UpdateFragment } from '../../Form/UpdateFragment/UpdateFragment'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { FC } from 'react'
import { MdDeleteForever } from 'react-icons/md'

export const Teachers: FC<{ category: ITeachers[] }> = ({ category }) => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	let totalMaterials = category.flatMap((w) => w.works)
	const [deleteCategory] = teachersApi.useDeleteTeachersCategoryMutation()

	const deleteTeachersCategory = async (id: number) => {
		await deleteCategory(id).unwrap()
	}

	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ display: 'flex', alignItems: 'baseline', gap: '40px' }}>
				<Typography
					variant='h5'
					sx={{
						color: colors.blueAccent[700],
						display: 'flex',
						gap: '3px',
						flexDirection: 'column'
					}}
				>
					Труды, архивы, категории
					<span
						style={{ fontSize: '12px', display: 'block', marginTop: '6px' }}
					>
						Всего категорий: {category.length}
					</span>
					<span
						style={{ fontSize: '12px', display: 'block', marginTop: '2px' }}
					>
						Всего материалов: {totalMaterials.length}
					</span>
				</Typography>
				<CreateFragment fragmentCreate='CreateTeachersCategory' />
			</Box>
			<Grid
				sx={{ pl: '30px', my: '20px' }}
				container
				rowSpacing={1}
				columnSpacing={{ xs: 1, sm: 3, md: 4 }}
			>
				{category.map((item) => (
					<Grid
						item
						xs={6}
						key={item.id}
						sx={{
							border: `1px solid ${colors.primary[600]}`,
							my: '6px'
						}}
					>
						<Box sx={{ display: 'flex', gap: '5px', alignItems: 'baseline' }}>
							<Link
								href={`/website/teachers-work/${item.id}`}
								style={{
									color: colors.blueAccent[500],
									display: 'flex',
									alignItems: 'center'
								}}
							>
								<Typography
									variant='subtitle1'
									sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}
								>
									{item.name}
									<span style={{ fontSize: '10px' }}>{item.description}</span>
								</Typography>
							</Link>
							<UpdateFragment
								fragmentUpdate='UpdateTeachersCategory'
								id={item.id}
							/>
							{!item.works.length ? (
								<Button
									color='success'
									size='large'
									title={
										'Можно удалить, контента в нем нету. Но надо ли Вам это? Можно просто обновить..'
									}
									onClick={() => deleteTeachersCategory(item.id)}
								>
									<MdDeleteForever />
								</Button>
							) : (
								<Button
									color='success'
									size='large'
									sx={{ ':hover': { cursor: 'not-allowed' } }}
									title={
										'Нельзя удалить основную категорию, если в нем есть контент'
									}
								>
									<MdDeleteForever />
								</Button>
							)}
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}
