import { tokens } from '../../../theme'
import {
	DarkModeOutlined,
	LightModeOutlined,
	SearchOutlined
} from '@mui/icons-material'
import { useTheme } from '@mui/material'

export const WHome = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	return <>Website home</>
}
