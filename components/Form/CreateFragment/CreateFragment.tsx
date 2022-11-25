import { MyModalContext } from '../../../contexts/MyModal.context'
import { tokens } from '../../../theme'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { FC, useContext } from 'react'

export const CreateFragment: FC<{ id: number; fragmentCreate: string }> = ({
	id,
	fragmentCreate
}) => {
	const { onOpen } = useContext(MyModalContext)
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	return (
		<Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
			<Button color='success' onClick={() => onOpen(fragmentCreate, id)}>
				Создать
			</Button>
		</Box>
	)
}
