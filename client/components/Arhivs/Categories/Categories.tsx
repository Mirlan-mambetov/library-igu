import Link from 'next/link'
import { FC } from 'react'
import { Button } from '../../Button/Button'


// STYLES 
import classes from './Categories.module.scss'
import { CategoriesProps } from './Categories.props'

export const ArhivsCategory: FC<CategoriesProps> = ({ arhivs, link }): JSX.Element => {
  return (
    <div className={classes.categories}>
      <div className={classes.vesnikNumber}>
        <span>Вы в номере: №11999</span>
      </div>
      {arhivs.map(a => (
        <div className={classes.category} key={a.id}>
          <Link href={`/${link}/arhiv/${a.alias}`}>
            <a>
              {a.name}
            </a>
          </Link>
        </div>
      ))}
      <Link href={`/${link}/arhivs`}>
        <a>
          <Button className={classes.moreBtn}>Показать больше</Button>
        </a>
      </Link>
    </div>
  )
}
