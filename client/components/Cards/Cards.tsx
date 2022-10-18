import { FC } from 'react'
import { Paragraph, Title } from '../'
import { CardsProps } from './Cards.props'


// STYLES
import styles from './Cards.module.scss'
import Link from 'next/link'

export const Cards: FC<CardsProps> = ({ data, cardsLink }): JSX.Element => {
  return (
    <div className={styles.cards}>
      <div className={styles.published}>{data.published}</div>
      <Link href={`/${cardsLink}/${data.id}`}>
        <a>
          <div className={styles.cardsImage}>
            <img src={data.image} alt={data.title} />
            <Title className={styles.cardsTitle} type="h4">{data.title}</Title>
          </div>
        </a>
      </Link>
      <Paragraph className={styles.newsDescription}>
        {data.description}
      </Paragraph>
    </div>
  )
}
