import { tokens } from '../../../theme'
import { FieldProps } from './Fiedl.props'
import styles from './Field.module.scss'
import { useTheme } from '@mui/material'
import { Box } from '@mui/system'
import cn from 'classnames'
import { forwardRef } from 'react'

export const Field = forwardRef<HTMLInputElement, FieldProps>(
	({ error, type = 'text', style, ...rest }, ref) => {
		const theme = useTheme()
		const colors = tokens(theme.palette.mode)
		return (
			<Box
				style={{ ...style }}
				sx={{ my: '10px', border: `1px solid ${colors.primary[500]}` }}
			>
				<input
					className={cn(styles.input)}
					style={{ color: `${colors.primary[500]}` }}
					type={type}
					ref={ref}
					{...rest}
				/>
				{error && <span className={styles.errors}>{error.message}</span>}
			</Box>
		)
	}
)
Field.displayName = 'Field'
