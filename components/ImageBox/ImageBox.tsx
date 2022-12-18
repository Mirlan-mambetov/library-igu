import { Paragraph, Title } from '../'
// STYLES
import styles from './ImageBox.module.scss'
import { ImageboxProps } from './ImageBox.props'
import Image from 'next/image'
import { FC } from 'react'

export const Imagebox: FC<ImageboxProps> = ({ data }): JSX.Element => {
	return (
		<div className={styles.imageBox}>
			<div className={styles.image}>
				<Image
					width={580}
					height={340}
					src={`${process.env.NEXT_PUBLIC_APP_STATIC}/${data.image}`}
					alt={data.title}
				/>
			</div>
			<div className={styles.content}>
				<Title type='h3'>{data.title}</Title>
				<Title className={styles.subTitle} type='h4'>
					{data.subtitle}
				</Title>
				<Paragraph className={styles.description}>{data.description}</Paragraph>
			</div>
		</div>
	)
}
