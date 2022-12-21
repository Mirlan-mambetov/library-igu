import { ITeachersWork } from '../../../../interfaces/teachers.interface'
import { teachersApi } from '../../../../store/api/teachers/teachers.api'
import { tokens } from '../../../../theme'
import { UpdateFragment } from '../../../Form/UpdateFragment/UpdateFragment'
import { Box, Typography, useTheme } from '@mui/material'
import Button from '@mui/material/Button'
import dayjs from 'dayjs'
import Link from 'next/link'
import React, { FC } from 'react'

const TeachersItem: FC<{ works: ITeachersWork[] }> = ({ works }) => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const [deleteWork] = teachersApi.useDeleteTeachersWorkMutation()

	return (
		<Box
			sx={{
				display: 'flex',
				gap: '20px',
				flexDirection: 'column',
				py: '20px'
			}}
		>
			{works?.map((work) => (
				<Box key={work.id}>
					<Typography
						sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}
						color={colors.primary[700]}
						variant='h5'
					>
						<span style={{ fontSize: '10px' }}>авторы:</span>
						{work.authors}
						<UpdateFragment fragmentUpdate='UpdateTeachersWork' id={work.id} />
						<Button color='warning' onClick={() => deleteWork(work.id)}>
							Удалить
						</Button>
					</Typography>
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
							{!work.name ? (
								<span style={{ fontSize: '10px' }}>пусто</span>
							) : (
								work.name
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
							{!work.description ? (
								<span style={{ fontSize: '10px' }}>пусто</span>
							) : (
								work.description
							)}
						</Typography>
						<Link
							style={{ fontSize: '14px', textDecoration: 'underline' }}
							href={`${process.env.NEXT_PUBLIC_APP_STATIC}${work.file}`}
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
						<span>категория: {work.category.name}</span>
						<span>скачено: {work.downloaded}</span>
						<span>просмотров: {work.views}</span>
					</Box>
					<Box
						sx={{
							my: '4px',
							display: 'flex',
							gap: '22px',
							alignItems: 'center',
							fontSize: '10px'
						}}
						color={colors.greenAccent[600]}
					>
						<span style={{ display: 'flex', gap: '6px' }}>
							дата создания:
							<time>{dayjs(work.createdAt).format('YYYY-MM HH:mm:ss')}</time>
						</span>
					</Box>
				</Box>
			))}
		</Box>
	)
}
export default TeachersItem
