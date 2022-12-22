import { Button } from '../'
import { Title } from '../Title/Title'
import styles from './Arhivs.module.scss'
import { ArhivsProps } from './Arhivs.props'
import classNames from 'classnames'
import Link from 'next/link'
import { FC, useState } from 'react'

export const Arhivs: FC<ArhivsProps> = ({ data, contentLink }): JSX.Element => {
	const [more, setMore] = useState<boolean>(false)
	const totalMaterials = data.flatMap((m) => m.materials).length

	const moreHandler = () => {
		if (!more) {
			setMore(true)
		} else {
			setMore(false)
		}
	}
	return (
		<div className={styles.arhivs}>
			<div className={styles.content}>
				<Title type='h3'>Архивы вестника</Title>
				<div className={styles.infoItem}>
					<span>архивов: {data.length}</span>
					<span>материалов: {totalMaterials}</span>
				</div>
			</div>
			<div
				className={classNames(styles.links, {
					[styles.more]: more
				})}
			>
				{data.map((archiv) => (
					<Link href={`/${contentLink}/arhiv/${archiv.id}`} key={archiv.id}>
						<a>{archiv.name}</a>
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
