import { Paragraph, Title } from '../../'
// STYLES
import styles from './Textbox.module.scss'
import { TextboxProps } from './Textbox.props'
import classNames from 'classnames'
import { FC } from 'react'

export const Textbox: FC<TextboxProps> = ({ data }): JSX.Element => {
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
