// STYLES
import styles from './SubContent.module.scss'
import { SubContentProps } from './SubContent.props'
import classNames from 'classnames'
import { FC } from 'react'

export const SubContent: FC<SubContentProps> = ({
	data,
	orientation = 'column'
}): JSX.Element => {
	return (
		<div
			className={classNames(styles.subContent, {
				[styles.row]: orientation === 'row',
				[styles.column]: orientation === 'column'
			})}
		>
			{data.map((item) => (
				<div className={styles.subItems} key={item.id}>
					<span>{item.title}</span>
					<span>{item.description}</span>
				</div>
			))}
		</div>
	)
}
