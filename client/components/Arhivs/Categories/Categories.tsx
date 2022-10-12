import Link from 'next/link'
import { FC } from 'react'


// STYLES 
import classes from './Categories.module.scss'
import { CategoriesProps } from './Categories.props'

export const ArhivsCategory: FC<CategoriesProps> = ({ arhivs }): JSX.Element => {
  return (
    <div className={classes.categories}>
      {arhivs.map(a => (
        <div className={classes.category} key={a.id}>
          <Link href={`/category/${a.alias}`}>
            <a>
              {a.name}
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}
