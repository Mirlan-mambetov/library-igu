import { Title } from '../'
import { IHero } from '../../interfaces/hero.interface'
import styles from './Hero.module.scss'
import { defaultBackground } from './Hero.props'
import { Navigation } from './Navigation/Navigation'
import { SubContent } from './SubContent/SubContent'
import { FC } from 'react'

export const Hero: FC<{ data: IHero }> = ({ data }): JSX.Element => {
	return (
		<>
			<div
				className={styles.hero}
				style={{
					backgroundImage:
						!data.background && !data.image
							? `url(${defaultBackground})`
							: `url(${process.env.NEXT_PUBLIC_APP_STATIC}/${
									data.background || data.image
							  } )`
				}}
			>
				<div className='container'>
					<div className={styles.wrapp}>
						<div className={styles.content}>
							<Title className={styles.title} type='h1'>
								{data.title}
							</Title>
							{/* {hero.subcontent && <Title className={styles.subTitle} type='h4'>{subTitle}</Title>} */}
						</div>
						{data.subcontent && (
							<SubContent
								data={data.subcontent}
								orientation={data.subContentOrientation}
							/>
						)}
						{data.totalArticle && (
							<span className={styles.information}>
								{data.infoTitle}: {data.totalArticle}
							</span>
						)}
						{/* {button && <Button className={styles.button} onClick={() => router.push({ pathname: '/login' })}>Войти</Button>} */}
					</div>
					<div className={styles.navigation}>
						<Navigation />
					</div>
				</div>
			</div>
		</>
	)
}
