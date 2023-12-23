import { IJournal } from '../../interfaces/journal.interface'
import { Paragraph } from '../Paragraph/Paragraph'
import { Title } from '../Title/Title'
// STYLES
import styles from './Jurnal.module.scss'
import { Jurnalinfo } from './Jurnalinfo/Jurnalinfo'
import Image from 'next/image'
import { FC } from 'react'

export const Jurnal: FC<IJournal> = ({
  journalHead,
  image,
  subtitle,
  title,
  description
}): JSX.Element => {
  return (
    <div className={styles.jurnal}>
      <div className={styles.jurnalInformation}>
        {journalHead &&
          journalHead.map((headInfo) => (
            <Jurnalinfo key={headInfo.id} {...headInfo} />
          ))}
      </div>
      <div className={styles.jurnalAbout}>
        <div className={styles.content}>
          <Title type="h3">{title}</Title>
          <Title className={styles.test} type="h4">
            {subtitle}
          </Title>
          <Paragraph>{description}</Paragraph>
        </div>
        <div className={styles.image}>
          <Image
            src={`${process.env.NEXT_PUBLIC_APP_STATIC}/${image}`}
            alt={title}
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  )
}
