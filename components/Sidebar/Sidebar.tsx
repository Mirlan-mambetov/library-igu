import { DrawerContext } from '../../contexts/DrawerContext'
import { Menu } from '../UI'
import { PanelMenu, WebsitePageMenu } from '../UI/Menu/Menu.data'
import { Divider, Drawer, Toolbar, Typography } from '@mui/material'
import { FC, useContext } from 'react'

export const Sidebar: FC = () => {
	const { drawerWidth } = useContext(DrawerContext)

	return (
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
			{/* FIRST LEVEL MENU TO PANEL ADNIM */}
			<Menu data={PanelMenu} />
			<Divider />
			<Typography variant='h6' sx={{ pl: '12px', py: '20px' }}>
				Страницы
			</Typography>
			{/* NEST LEVEL MENU TO WEBSITE PAGES */}
			<Menu data={WebsitePageMenu} />
		</Drawer>
	)
}
