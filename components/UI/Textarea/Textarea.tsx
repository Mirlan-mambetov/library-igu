import styles from './Textarea.module.scss'
import { ITextArea } from './Textarea.props'
import Box from '@mui/material/Box'
import { FC, forwardRef } from 'react'

export const Textarea = forwardRef<HTMLTextAreaElement, ITextArea>(
	({ error, style, ...rest }, ref) => {
		return (
			<Box>
				<textarea className={styles.textarea} ref={ref} {...rest}></textarea>
				{error && (
					<span style={{ fontSize: '12px', color: 'red' }}>
						{error.message}
					</span>
				)}
			</Box>
		)
	}
)
