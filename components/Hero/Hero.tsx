import { Title } from '../'
import { Button } from '../'
import { IHero } from '../../interfaces/hero.interface'
// STYLE
import styles from './Hero.module.scss'
import { HeroProps } from './Hero.props'
import { Navigation } from './Navigation/Navigation'
import { SubContent } from './SubContent/SubContent'
import { useRouter } from 'next/router'
import { FC } from 'react'

export const Hero: FC<{ data: IHero }> = ({ data }): JSX.Element => {
	const router = useRouter()
	return (
		<>
			<div
				className={styles.hero}
				style={{
					backgroundImage: `url(${process.env.NEXT_PUBLIC_APP_STATIC}/${
						data.background || data.image
					})`
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
						{/* {subContent && <SubContent data={subContent} orientation={subContentOrientation} />} */}
						{/* {information && <span className={styles.information}>Количество материалов: {information}</span>} */}
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
