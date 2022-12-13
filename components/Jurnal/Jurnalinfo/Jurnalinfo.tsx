import { FC } from 'react'
import { JurnalInformationI } from '../../../Interfaces/Jurnal.interface'
import { Title } from '../../'


// STYLES
import styles from './jurnalinfo.module.scss'

export const Jurnalinfo: FC<JurnalInformationI> = ({ address, title }): JSX.Element => {
  return (
    <div className={styles.jurnalInfo}>
      <Title className={styles.jurnalTitle} type='h3'>{title}</Title>
      <div className={styles.wrapp}>
        {address.map(item => (
          <div className={styles.item} key={item.id}>
            <span>{item.name}</span>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
