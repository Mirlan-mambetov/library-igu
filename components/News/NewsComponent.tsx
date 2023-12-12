import { INews } from '../../interfaces/news.interface'
import { formatDate } from '../../utils/formatDate.utils'
import { Paragraph } from '../Paragraph/Paragraph'
import { Title } from '../Title/Title'
import styles from './News.module.scss'
import Link from 'next/link'
import { FC } from 'react'

export const NewsComponent: FC<{ data: INews[] }> = ({ data }): JSX.Element => {
  return (
    <>
      {data?.map((news) => (
        <Link href={`/news/${news.id}`} key={news.id}>
          <div className={styles.cards}>
            <div className={styles.published}>
              {formatDate(news.createdAt, 'MMM-YYYY')}
            </div>
            <div className={styles.cardsImage}>
              <img
                src={`${process.env.NEXT_PUBLIC_APP_STATIC}${news.image}`}
                alt={news.title}
              />
            </div>
            <Title className={styles.cardsTitle} type="h4">
              {news.title}
            </Title>
            <Paragraph className={styles.newsDescription}>
              {news.description}
            </Paragraph>
          </div>
        </Link>
      ))}
    </>
  )
}
