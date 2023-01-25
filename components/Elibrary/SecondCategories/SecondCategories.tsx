import { Title } from '../../'
import { IElibrarySecondCategory } from '../../../interfaces/elibrary.interface'
import styles from './ElibrarySecondCategories.module.scss'
import classNames from 'classnames'
import Link from 'next/link'
import { FC } from 'react'

export const ElibrarySecondCategories: FC<{
	data: IElibrarySecondCategory[]
}> = ({ data }) => {
	const sortData = [...data].sort((a, b) => (a.name > b.name ? 1 : -1))

	return (
		<div className={styles.categories}>
			{sortData.map(category => (
				<div className={styles.category} key={category.id}>
					<Link href={`/elibrary/books/${category.id}`}>
						<a>
							<div className={styles.title}>
								<Title type='h4'>{category.name}</Title>
							</div>
						</a>
					</Link>
				</div>
			))}
		</div>
	)
}
