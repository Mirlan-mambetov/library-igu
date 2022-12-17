import { Title } from '../../Title/Title'
// STYLES
import styles from './Category.module.scss'
import { CategoryProps } from './Category.props'
import Link from 'next/link'
import { FC } from 'react'

export const Category: FC<CategoryProps> = ({
	arhivsLink,
	data
}): JSX.Element => {
	return (
		<div className={styles.category}>
			<div className={styles.categoryTop}>
				<Title type='h3'>Категории</Title>
			</div>
			{data?.map((arhiv) => (
				<Link href={`/${arhivsLink}/arhiv/${arhiv.id}`} key={arhiv.id}>
					<a>{arhiv.name}</a>
				</Link>
			))}
		</div>
	)
}
