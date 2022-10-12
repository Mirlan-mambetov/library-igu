import { FC } from "react"
import { HeroProps } from "./Hero.props"
import { Listgroup, Title } from '../'
import { LinkProps } from "../../interfaces/Link.props"
import { HeroSubcontent } from "./HeroSubcontent/HeroSubcontent"
import classNames from "classnames"

// STYLES
import classes from './Hero.module.scss'

export const Hero: FC<HeroProps> = ({
  image = "https://res.cloudinary.com/djzubalr7/image/upload/v1665219599/Library-igu/background-default_z6g7u1.png",
  title,
  subTitle,
  content,
  button,
  arhivInfo
}): JSX.Element => {

  const heroNavLink: LinkProps[] = [
    { id: 1, name: 'Труды перподавателей', href: '/teachers' },
    { id: 2, name: 'Кыргыз-тили жана адабияты', href: '/kyrgyz-language' },
    { id: 3, name: 'Электронная библиотека', href: '/elibrary' },
    { id: 4, name: 'Электронные ресурсы', href: '#' }
  ]
  return (
    <div
      className={classNames(classes.hero, { [classes.full]: content })}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={classes.content}>
        <Title className={classes.title} type="h1">{title}</Title>
        {subTitle && <Title className={classes.subTitle} type="h3">{subTitle}</Title>}
        {arhivInfo && <span className={classes.arhivInfo}>Количество материалов: {arhivInfo}</span>}
        {
          content ?
            <HeroSubcontent content={content} button={button} />
            :
            null
        }
      </div>
      <div className={classes.navigation}>
        <Listgroup className={classes.list} icon menu={heroNavLink}></Listgroup>
      </div>
    </div>
  )
}

// Background
// title
// description
// 
