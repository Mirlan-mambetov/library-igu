import { FC } from 'react'
import { Title } from '../'
import { HeroProps } from './Hero.props'
import { Navigation } from './Navigation/Navigation'
import { SubContent } from './SubContent/SubContent'

// STYLE 
import styles from './Hero.module.scss'

export const Hero: FC<HeroProps> = ({
  background = "https://res.cloudinary.com/djzubalr7/image/upload/v1665219599/Library-igu/background-default_z6g7u1.png",
  subContent,
  title = "Научная библиотека ИГУ",
  subTitle,
  information
}): JSX.Element => {
  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${background})` }}>
      <div className="container">
        <div className={styles.wrapp}>
          <div className={styles.content}>
            <Title className={styles.title} type='h1'>{title}</Title>
            {subTitle && <Title className={styles.subTitle} type='h4'>{subTitle}</Title>}
          </div>
          {subContent && <SubContent data={subContent} />}
          {information && <span className={styles.information}>Количество материалов: {information}</span>}
        </div>
        <div className={styles.navigation}>
          <Navigation />
        </div>
      </div>
    </div>
  )
}
