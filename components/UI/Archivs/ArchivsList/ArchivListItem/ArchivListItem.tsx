import { archivApi } from '../../../../../store/api/archiv/archiv.api'
import { tokens } from '../../../../../theme'
import { UpdateFragment } from '../../../../Form/UpdateFragment/UpdateFragment'
import { IMaterialItems } from '../ArchivsList'
import { Button, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import dayjs from 'dayjs'
import Link from 'next/link'
import { FC } from 'react'

export const ArchivListItem: FC<IMaterialItems> = ({ items }) => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const [deleteMaterial] = archivApi.useDeleteArchivMaterialMutation()

	return (
		<Box
			sx={{ display: 'flex', flexDirection: 'column', gap: '40px', mt: '20px' }}
		>
			{items.map((archiv) => (
				<Box key={archiv.id}>
					<Typography
						sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}
						color={colors.primary[700]}
						variant='h5'
					>
						<span style={{ fontSize: '10px' }}>авторы:</span>
						{archiv.authors}
						<UpdateFragment
							fragmentUpdate='UpdateArchivMaterial'
							id={archiv.id}
						/>
						<Button onClick={() => deleteMaterial(archiv.id)}>Удалить</Button>
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
							{!archiv.name ? (
								<span style={{ fontSize: '10px' }}>пусто</span>
							) : (
								archiv.name
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
							{!archiv.description ? (
								<span style={{ fontSize: '10px' }}>пусто</span>
							) : (
								archiv.description
							)}
						</Typography>
						<Link
							style={{ fontSize: '14px', textDecoration: 'underline' }}
							href={`${process.env.NEXT_PUBLIC_APP_STATIC}${archiv.file}`}
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
						<span>категория: {archiv.category.name}</span>
						<span>скачено: {archiv.downloaded}</span>
						<span>просмотров: {archiv.views}</span>
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
							<time>{dayjs(archiv.createdAt).format('YYYY-MM HH:mm:ss')}</time>
						</span>
					</Box>
				</Box>
			))}
		</Box>
	)
}
