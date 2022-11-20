import { DrawerContext } from '../../contexts/DrawerContext'
import { tokens } from '../../theme'
import { Menu } from '../UI'
import MailIcon from '@mui/icons-material/Mail'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import {
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
	useTheme
} from '@mui/material'
import { Box } from '@mui/system'
import { FC, useContext } from 'react'

export const Sidebar: FC = () => {
	const { drawerWidth } = useContext(DrawerContext)

	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	return (
		<Box sx={{ display: 'flex' }}>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box'
					}
				}}
				variant='permanent'
				anchor='left'
			>
				<Toolbar />
				<Divider />
				{/* FIRST LEVEL MENU TO PANEL ADNIM */}
				<Menu />
				<Divider />
				<Typography variant='h6' sx={{ pl: '12px', py: '20px' }}>
					Страницы
				</Typography>
				{/* NEST LEVEL MENU TO WEBSITE PAGES */}
				<Menu />
			</Drawer>
		</Box>
	)
}
