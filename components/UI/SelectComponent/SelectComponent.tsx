import { tokens } from '../../../theme'
import {
	FormControl,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Select,
	useTheme
} from '@mui/material'
import { FC, useState } from 'react'

export const SelectComponent: FC<{
	limits: number[]
	title: string
	handleChange: (value: any) => void
}> = ({ limits, title, handleChange }) => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	return (
		<FormControl fullWidth>
			<Select defaultValue={'Age'} label='Age' onChange={handleChange}>
				<MenuItem disabled value='choose'>
					Choose Option
				</MenuItem>
				{limits.map((limit) => (
					<MenuItem value={limit}>{limit}</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}
