import Link from 'next/link'
import { FC } from 'react'
import { Title } from '../Title/Title'
import { ArhivsProps } from './Arhivs.props'


// STYLES
import styles from './Arhivs.module.scss'

export const Arhivs: FC<ArhivsProps> = ({ data, contentLink }): JSX.Element => {
  return (
    <div className={styles.arhivs}>
      <div className={styles.content}>
        <Title type='h3'>{data.information.title}</Title>
        <div className={styles.infoItem}>
          <span>количество архивов: {data.information.totalArhivs}</span>
          <span>материалов: {data.information.totalMaterials}</span>
        </div>
      </div>
      <div className={styles.links} >
        {data.links.map(link => (
          <Link href={`/${contentLink}/arhiv/${link.alias}`} key={link.id}>
            <a>
              {link.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}
