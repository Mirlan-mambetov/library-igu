import { FieldProps } from './Fiedl.props'
import styles from './Field.module.scss'
import { Box } from '@mui/system'
import cn from 'classnames'
import { forwardRef } from 'react'

export const Field = forwardRef<HTMLInputElement, FieldProps>(
	({ error, type = 'text', style, ...rest }, ref) => {
		return (
			<Box
				style={{ ...style }}
				sx={{ my: '10px', border: '1px solid #fefefe' }}
			>
				<input className={cn(styles.input)} type={type} ref={ref} {...rest} />
				{error && <span className={styles.errors}>{error.message}</span>}
			</Box>
		)
	}
)
Field.displayName = 'Field'
