import { IElibraryCategory } from '../../../../interfaces/elibrary.interface'
import { tokens } from '../../../../theme'
import { CreateFragment } from '../../../Form/CreateFragment/CreateFragment'
import { UpdateFragment } from '../../../Form/UpdateFragment/UpdateFragment'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'

const ElibraryCategory: FC<{ categories: IElibraryCategory[]; id: number }> = ({
	categories,
	id
}) => {
	// const [categoryId, setCategoryId] = useState
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	return (
		<Box
			color={colors.grey[600]}
			sx={{ display: 'flex', gap: '10px', flexDirection: 'column' }}
		>
			<CreateFragment fragmentCreate='CreateElibraryCategory' id={id} />
			{categories.map((category) => (
				<Box
					key={category.id}
					sx={{ border: `1px solid ${colors.blueAccent[100]}`, p: '10px' }}
				>
					<Link href={`/website/elibrary/books/${category.id}`}>
						<Typography variant='h6'>{category.name}</Typography>
						<span style={{ fontSize: '12px' }}>
							всего книг: {category.books.length}
						</span>
					</Link>
					<UpdateFragment
						fragmentUpdate='UpdateElibraryCategory'
						id={category.id}
					/>
				</Box>
			))}
		</Box>
	)
}

export default ElibraryCategory
