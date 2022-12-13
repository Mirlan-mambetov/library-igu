import { FC } from 'react'
import { Jurnalinfo } from './Jurnalinfo/Jurnalinfo'

// STYLES
import styles from './Jurnal.module.scss'
import { JurnalI } from '../../Interfaces/Jurnal.interface'
import { Title } from '../Title/Title'
import { Paragraph } from '../Paragraph/Paragraph'

export const Jurnal: FC<JurnalI> = ({ jurnalAbout, information }): JSX.Element => {
  return (
    <div className={styles.jurnal}>
      {information && <div className={styles.jurnalInformation}><Jurnalinfo {...information} /></div>}
      <div className={styles.jurnalAbout}>
        <div className={styles.content}>
          <Title type='h3'>{jurnalAbout.title}</Title>
          <Title className={styles.test} type='h4'>{jurnalAbout.subTitle}</Title>
          <Paragraph>
            {jurnalAbout.text}
          </Paragraph>
        </div>
        <div className={styles.image}>
          <img src={jurnalAbout.image} alt={jurnalAbout.title} />
        </div>
      </div>
    </div>
  )
}
