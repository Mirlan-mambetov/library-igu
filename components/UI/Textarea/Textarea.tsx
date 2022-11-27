import styles from './Textarea.module.scss'
import { ITextArea } from './Textarea.props'
import { FC, forwardRef } from 'react'

export const Textarea = forwardRef<HTMLTextAreaElement, ITextArea>(
	({ error, style, ...rest }, ref) => {
		return <textarea className={styles.textarea} ref={ref} {...rest}></textarea>
	}
)
