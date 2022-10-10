import { FC } from 'react'

// STYLES
import classes from './HeroSubcontent.module.scss'
import { HeroSubcontentProps } from './HeroSubcontent.props'

export const HeroSubcontent: FC<HeroSubcontentProps> = ({ content }): JSX.Element => {
  return (
    <div className={classes.subContent}>
      {content.map(c => (
        <div className={classes.subContentItem} key={c.id}>
          <span>{c.title}</span>
          {c.text?.map(t => (
            <span>{t}</span>
          ))}
        </div>
      ))}
    </div>
  )
}
