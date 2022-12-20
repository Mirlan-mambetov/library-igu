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
						<span>Идентификатор: {work.id}</span>
						{work.authors}
						<UpdateFragment fragmentUpdate='UpdateTeachersWork' id={work.id} />
						<Button color='warning' onClick={() => deleteWork(work.id)}>
							Удалить
						</Button>
					</Typography>
					<Typography
						color={colors.primary[700]}
						sx={{ my: '10px' }}
						variant='subtitle1'
					>
						{work.description}
					</Typography>
					<Box
						sx={{
							display: 'flex',
							gap: '14px',
							alignItems: 'center',
							mt: '10px'
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
							alignItems: 'center'
						}}
						color={colors.greenAccent[600]}
					>
						<span style={{ display: 'flex', gap: '6px' }}>
							дата создания:
							<time>{dayjs(work.createdAt).format('YYYY-MM HH:mm:ss')}</time>
						</span>
						<Link
							href={`${process.env.NEXT_PUBLIC_APP_STATIC}${work.file}`}
							target={'_blank'}
						>
							файл
						</Link>
					</Box>
				</Box>
			))}
		</Box>
	)
}
export default TeachersItem
