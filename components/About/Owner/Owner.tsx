import { IAboutOwner } from '../../../interfaces/about.interface'
import styles from './Owner.module.scss'
import { FC } from 'react'

export const Owner: FC<{ data: IAboutOwner }> = ({ data }): JSX.Element => {
	return (
		<>
			<div className={styles.ownerImage}>
				<img
					src={`${process.env.NEXT_PUBLIC_APP_STATIC}/${data.image}`}
					alt={data.name}
				/>
			</div>
			<div className={styles.ownerInfo}>
				<div className={styles.ownerName}>
					<span>Директор Научной библиотеки</span>
					{data.name}
				</div>
				<div className={styles.ownerItem}>
					<span>E-mail:</span>
					{data.email}
				</div>
				<div className={styles.ownerItem}>
					<span>Рабочий телефон:</span>
					{data.phone}
				</div>
			</div>
		</>
	)
}
