import MailIcon from '@mui/icons-material/Mail'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import {
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText
} from '@mui/material'
import { FC } from 'react'

export const Menu: FC = () => {
	return (
		<List>
			{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
				<ListItem key={text} disablePadding>
					<ListItemButton>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItemButton>
				</ListItem>
			))}
		</List>
	)
}
