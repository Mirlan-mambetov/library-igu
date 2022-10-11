import { FC } from 'react'
import { Button } from '../../'

// STYLES
import classes from './HeroSubcontent.module.scss'
import { HeroSubcontentProps } from './HeroSubcontent.props'

export const HeroSubcontent: FC<HeroSubcontentProps> = ({ content, button }): JSX.Element => {
  return (
    <div className={classes.subContent}>
      {content.map(c => (
        <div className={classes.subContentItem} key={c.id}>
          <span>{c.title}</span>
          {c.text?.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      ))}
      {
        button ?
          <Button className={classes.btn}>{button?.name}</Button>
          :
          <></>
      }
    </div>
  )
}
