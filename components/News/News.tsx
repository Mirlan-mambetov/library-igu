import { INews } from '../../interfaces/news.interface'
import { formatDate } from '../../utils/formatDate.utils'
import { Paragraph } from '../Paragraph/Paragraph'
import { Title } from '../Title/Title'
import styles from './News.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const News: FC<{ data: INews[] }> = ({ data }): JSX.Element => {
	return (
		<>
			{data?.map((news) => (
				<div className={styles.cards} key={news.id}>
					<div className={styles.published}>
						{formatDate(news.createdAt, 'MMM-DD')}
					</div>
					<Link href={`/news/${news.id}`}>
						<a>
							<div className={styles.cardsImage}>
								<Image
									src={`${process.env.NEXT_PUBLIC_APP_STATIC}${news.image}`}
									alt={news.title}
								/>
								<Title className={styles.cardsTitle} type='h4'>
									{news.title}
								</Title>
							</div>
						</a>
					</Link>
					<Paragraph className={styles.newsDescription}>
						{news.description}
					</Paragraph>
				</div>
			))}
		</>
	)
}

export default News
