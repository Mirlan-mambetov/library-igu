import { FC } from 'react'
import { ImageboxProps } from './Imagebox.props'
import { Paragraph, Title } from '../'


// STYLES
import styles from './Imagebox.module.scss'

export const Imagebox: FC<ImageboxProps> = ({ data }): JSX.Element => {
  return (
    <div className={styles.imageBox}>
      <div className={styles.image}>
        <img src={data.image} alt={data.title} />
      </div>
      <div className={styles.content}>
        <Title type='h3'>{data.title}</Title>
        <Title className={styles.subTitle} type='h4'>{data.subTitle}</Title>
        <Paragraph className={styles.description}>
          {data.description}
        </Paragraph>
      </div>
    </div >
  )
}
