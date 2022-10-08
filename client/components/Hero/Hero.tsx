import { FC } from "react"
import { HeroProps } from "../../interfaces/Hero.props"
import { Listgroup, Title } from '../'

// STYLES
import classes from './Hero.module.scss'
import { LinkProps } from "../../interfaces/Link.props"

export const Hero: FC<HeroProps> = ({ image, title }): JSX.Element => {
  const heroNavLink: LinkProps[] = [
    { id: 1, name: 'Труды перподавателей', href: '/works' },
    { id: 2, name: 'Кыргыз-тили жана адабияты', href: '/kyrgyz' },
    { id: 3, name: 'Электронная библиотека', href: '/elibrary' },
    { id: 4, name: 'Электронные ресурсы', href: '#' }
  ]
  return (
    <div
      className={classes.hero}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={classes.content}>
        <Title className={classes.title} type="h1">{title}</Title>
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
