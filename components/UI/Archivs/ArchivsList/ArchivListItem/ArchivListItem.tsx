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
	const [deleteMaterial, { isSuccess }] =
		archivApi.useDeleteArchivMaterialMutation()

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
						<span>Идентификатор: {archiv.id}</span>
						{archiv.authors}
						<UpdateFragment
							fragmentUpdate='UpdateArchivMaterial'
							id={archiv.id}
						/>
						<Button onClick={() => deleteMaterial(archiv.id)}>Удалить</Button>
					</Typography>
					<Typography
						color={colors.primary[700]}
						sx={{ my: '10px' }}
						variant='subtitle1'
					>
						{archiv.description}
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
						<span>категория: {archiv.category.name}</span>
						<span>скачено: {archiv.downloaded}</span>
						<span>просмотров: {archiv.views}</span>
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
							<time>
								{dayjs(archiv.createdAt).format('YYYY-MMMM HH:mm:ss')}
							</time>
						</span>
						<span style={{ display: 'flex', gap: '6px' }}>
							дата обновления:
							<time>
								{dayjs(archiv.updatedAt).format('YYYY-MMMM HH:mm:ss')}
							</time>
						</span>
						<Link
							href={`${process.env.NEXT_PUBLIC_APP_STATIC}${archiv.file}`}
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
