import { Title } from '../../'
import { IJournalHead } from '../../../interfaces/journal.interface'
// STYLES
import { FC } from 'react'
import styles from './jurnalinfo.module.scss'

export const Jurnalinfo: FC<IJournalHead> = ({ title, items }): JSX.Element => {
  return (
    <div className={styles.jurnalInfo}>
      <Title className={styles.jurnalTitle} type="h3">
        {title}
      </Title>
      <div className={styles.wrapp}>
        {items?.map((item) => (
          <div className={styles.item} key={item.id}>
            <span>{item.title}:</span>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
