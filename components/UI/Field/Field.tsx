import { FieldProps } from './Fiedl.props'
import styles from './Field.module.scss'
import { Box } from '@mui/system'
import { forwardRef } from 'react'

export const Field = forwardRef<HTMLInputElement, FieldProps>(
	({ error, type = 'text', style, ...rest }, ref) => {
		return (
			<Box sx={{ my: '10px', border: '1px solid #fefefe' }}>
				<input className={styles.input} type={type} ref={ref} {...rest} />
				{error && <span>{error.message}</span>}
			</Box>
		)
	}
)
Field.displayName = 'Field'
