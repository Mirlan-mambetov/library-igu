import { FC } from 'react'
import { OwnerProps } from './Owner.props'


// STYLES
import styles from './Owner.module.scss'

export const Owner: FC<OwnerProps> = ({ data }): JSX.Element => {
  return (
    <>
      <div className={styles.ownerImage}>
        <img src={data.image} alt={data.name} />
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
