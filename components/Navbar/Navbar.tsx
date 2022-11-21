import { DrawerContext } from '../../contexts/DrawerContext'
import { ColorModeContext } from '../../theme'
import {
	DarkModeOutlined,
	LightModeOutlined,
	SearchOutlined
} from '@mui/icons-material'
import {
	AppBar,
	IconButton,
	InputBase,
	Toolbar,
	Typography,
	useTheme
} from '@mui/material'
import { Box } from '@mui/system'
import { FC, useContext } from 'react'

export const Navbar: FC = () => {
	const { drawerWidth } = useContext(DrawerContext)
	const { toggleColorMode } = useContext(ColorModeContext)

	const theme = useTheme()

	return (
		<AppBar
			position='fixed'
			sx={{
				boxShadow: '0px 1px 6px rgba(0, 0, 0, .1)',
				width: `calc(100% - ${drawerWidth}px)`,
				ml: `${drawerWidth}px`
			}}
			color='default'
		>
			<Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Typography variant='h6' noWrap component='div'>
					Научная библиотека ИГУ
				</Typography>
				<Box
					sx={{
						display: 'flex',
						gap: '20px',
						pr: '20px'
					}}
				>
					<Box>
						<InputBase
							sx={{ ml: 2, flex: 1, borderBottom: '1px solid #fff' }}
							placeholder='Поиск'
						/>
						<IconButton type='button' sx={{ p: 1 }}>
							<SearchOutlined />
						</IconButton>
					</Box>
					<IconButton onClick={toggleColorMode}>
						{theme.palette.mode === 'dark' ? (
							<LightModeOutlined />
						) : (
							<DarkModeOutlined />
						)}
					</IconButton>
				</Box>
			</Toolbar>
		</AppBar>
	)
}
