import { Button } from '../../Button/Button'
import { Title } from '../../Title/Title'
// STYLES
import styles from './Category.module.scss'
import { CategoryProps } from './Category.props'
import classNames from 'classnames'
import Link from 'next/link'
import { FC, useState } from 'react'

export const Category: FC<CategoryProps> = ({
	arhivsLink,
	data
}): JSX.Element => {
	const [more, setMore] = useState<boolean>(false)

	const moreHandler = () => {
		if (!more) {
			setMore(true)
		} else {
			setMore(false)
		}
	}
	return (
		<div className={styles.categories}>
			<div
				className={classNames(styles.category, {
					[styles.more]: more
				})}
			>
				<div className={styles.categoryTop}>
					<Title type='h3'>Категории</Title>
				</div>
				{data?.map((arhiv) => (
					<Link href={`/${arhivsLink}/arhiv/${arhiv.id}`} key={arhiv.id}>
						<a>{arhiv.name}</a>
					</Link>
				))}
			</div>
			<Button
				style={{ marginTop: '20px' }}
				orientation={more ? 'top' : 'bottom'}
				onClick={moreHandler}
			>
				{!more ? 'Показать больше' : 'Показать меньше'}
			</Button>
		</div>
	)
}
