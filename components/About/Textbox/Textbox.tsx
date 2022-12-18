import { Paragraph, Title } from '../../'
import styles from './Textbox.module.scss'
import classNames from 'classnames'
import { FC } from 'react'

interface ITextBox {
	title?: string
	description?: string
	image?: string
}
export const Textbox: FC<{ data: ITextBox }> = ({ data }): JSX.Element => {
	return (
		<>
			<div
				className={classNames(styles.textBox, { [styles.column]: data.image })}
			>
				{data.title && <Title type='h3'>{data.title}</Title>}
				<div className={styles.textBoxDescription}>
					<Paragraph line>{data.description}</Paragraph>
				</div>
				{data.image && (
					<div className={styles.textBoxImage}>
						<img
							src={`${process.env.NEXT_PUBLIC_APP_STATIC}/${data.image}`}
							alt={data.title ? data.title : data.image}
						/>
					</div>
				)}
			</div>
		</>
	)
}
