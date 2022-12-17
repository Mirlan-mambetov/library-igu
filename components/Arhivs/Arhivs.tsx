import { Title } from '../Title/Title'
// STYLES
import styles from './Arhivs.module.scss'
import { ArhivsProps } from './Arhivs.props'
import Link from 'next/link'
import { FC } from 'react'

export const Arhivs: FC<ArhivsProps> = ({ data, contentLink }): JSX.Element => {
	const totalMaterials = data.flatMap((m) => m.materials).length
	return (
		<div className={styles.arhivs}>
			<div className={styles.content}>
				<Title type='h3'>Архивы вестника</Title>
				<div className={styles.infoItem}>
					<span>количество архивов: {data.length}</span>
					<span>материалов: {totalMaterials}</span>
				</div>
			</div>
			<div className={styles.links}>
				{data.map((archiv) => (
					<Link href={`/${contentLink}/arhiv/${archiv.id}`} key={archiv.id}>
						<a>{archiv.name}</a>
					</Link>
				))}
			</div>
		</div>
	)
}
