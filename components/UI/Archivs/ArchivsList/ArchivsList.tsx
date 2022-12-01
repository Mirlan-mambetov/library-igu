import {
	IArhivs,
	IArhivsMaterials
} from '../../../../interfaces/arhivs.interface'
import { archivApi } from '../../../../store/api/archiv/archiv.api'
import { tokens } from '../../../../theme'
import { CreateFragment } from '../../../Form/CreateFragment/CreateFragment'
import { ArchivListItem } from './ArchivListItem/ArchivListItem'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { ChangeEvent, FC, useState } from 'react'

export interface IMaterialItems {
	items: IArhivsMaterials[]
	meta?: {
		totalItems: number
		itemCount: number
		itemsPerPage: number
		totalPages: number
		currentPage: number
	}
}
export const ArchivsList: FC<{ data: IArhivs }> = ({ data }) => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const [page, setPage] = useState(1)

	const { data: materials = {} as IMaterialItems, isLoading } =
		archivApi.useGetMaterialsByCategoryQuery(
			{ id: data.id, query: { page } },
			{ skip: !data.id }
		)

	const paginateHandler = async (e: ChangeEvent<unknown>, page: number) => {
		setPage(page)
		console.log(page)
	}

	return (
		<Box sx={{ py: '10px', pl: '12px' }}>
			<Box sx={{ display: 'flex', alignItems: 'baseline', gap: '15px' }}>
				<Box>
					<Typography variant='h5' color={colors.greenAccent[500]}>
						Архив {data.name}
					</Typography>
					<Typography
						variant='subtitle2'
						sx={{ my: '12px' }}
						color={colors.greenAccent[500]}
					>
						материалов в категории: {materials.items?.length}
					</Typography>
				</Box>
				<CreateFragment fragmentCreate='CreateArchivMaterial' id={data.id} />
			</Box>
			{isLoading ? (
				<span>Загрузка..</span>
			) : (
				<ArchivListItem items={materials.items} />
			)}
			<Box>
				{/* <ReactPaginate pageCount={meta.totalPages} /> */}
				<Stack spacing={2} sx={{ py: '10px' }} bgcolor={colors.grey[400]}>
					<Pagination
						defaultPage={1}
						count={materials.meta?.totalPages}
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
