import { Paragraph, Title } from '../'
import styles from './Cards.module.scss'
import { CardsProps } from './Cards.props'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export const Cards: FC<CardsProps> = ({ data, cardsLink }): JSX.Element => {
	return (
		<div className={styles.cards}>
			<div className={styles.published}>{data.createdAt}</div>
			<Link href={`/${cardsLink}/${data.id}`}>
				<a>
					<div className={styles.cardsImage}>
						<Image src={data.image} alt={data.title} />
						<Title className={styles.cardsTitle} type='h4'>
							{data.title}
						</Title>
					</div>
				</a>
			</Link>
			<Paragraph className={styles.newsDescription}>
				{data.description}
			</Paragraph>
		</div>
	)
}
