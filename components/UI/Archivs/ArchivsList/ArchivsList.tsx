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
import Typography from '@mui/material/Typography'
import { FC } from 'react'

interface IMaterialItems {
	items: IArhivsMaterials[]
}
export const ArchivsList: FC<{ data: IArhivs }> = ({ data }) => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { data: materials = {} as IMaterialItems } =
		archivApi.useGetMaterialsByCategoryQuery(data.id, { skip: !data.id })
	console.log(materials.items)
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
			{materials.items && <ArchivListItem data={materials.items} />}
		</Box>
	)
}
