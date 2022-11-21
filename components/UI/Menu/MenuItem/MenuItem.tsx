import { IMenuItem } from './MenuItem.props'
import {
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText
} from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'

const MenuItem: FC<{ data: IMenuItem }> = ({ data }) => {
	return (
		<ListItem disablePadding>
			<Link href={`${data.link}`}>
				<ListItemButton>
					{data.icon && (
						<ListItemIcon>
							<data.icon fontSize={'large'} />
						</ListItemIcon>
					)}
					<ListItemText primary={data.name} />
				</ListItemButton>
			</Link>
		</ListItem>
	)
}

export default MenuItem
