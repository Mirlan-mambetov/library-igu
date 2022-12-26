import { NotifyNew } from '../../Notify/NotifyNew/NotifyNew'
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
			{data.new && <NotifyNew />}
			<Link
				href={`${data.link}`}
				style={
					data.disabled ? { cursor: 'not-allowed' } : { cursor: 'pointer' }
				}
			>
				<ListItemButton disabled={data.disabled}>
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
