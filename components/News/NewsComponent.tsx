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
				<div className={styles.cards} key={news.id}>
					<div className={styles.published}>
						{formatDate(news.createdAt, 'MMM-DD')}
					</div>
					<Link href={`/news/${news.id}`}>
						<div className={styles.cardsImage}>
							<img
								src={`${process.env.NEXT_PUBLIC_APP_STATIC}${news.image}`}
								alt={news.title}
							/>
							<Title className={styles.cardsTitle} type='h4'>
								{news.title}
							</Title>
						</div>
					</Link>
					<Paragraph className={styles.newsDescription}>
						{news.description}
					</Paragraph>
				</div>
			))}
		</>
	)
}
