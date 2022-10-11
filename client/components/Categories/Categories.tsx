import { FC } from 'react'
import { CategoriesProps } from './Categories.props'
import { Paragraph, Title } from '../'
import Link from 'next/link'
import classNames from 'classnames'


// STYLES
import classes from './Categories.module.scss'

export const Categories: FC<CategoriesProps> = ({ categories, position = 'default' }): JSX.Element => {
  return (
    <div className={classNames(classes.categories, {
      [classes.fixed]: position === 'fixed'
    })}>
      {categories.map(category => (
        <Link href={`/${category.categoryLink}/category/${category.id}`} key={category.id}>
          <a>
            <Title className={classes.categoryName} type='h3'>{category.title}</Title>
            <Paragraph>
              {category.description}
            </Paragraph>
            <div className={classes.icon}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="#3164F4" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99997 0L13.293 3.293L6.29297 10.293L7.70697 11.707L14.707 4.707L18 8V0H9.99997Z" />
                <path d="M16 16H2V2H9L7 0H2C0.897 0 0 0.897 0 2V16C0 17.103 0.897 18 2 18H16C17.103 18 18 17.103 18 16V11L16 9V16Z" />
              </svg>
            </div>
          </a>
        </Link>
      ))}
    </div>
  )
}
