import { FC } from 'react'
import { CategoriesProps } from './Categories.props'
import Link from 'next/link'
import { Title } from '../../Title/Title'
import classNames from 'classnames'

// STYLES
import styles from './Categories.module.scss'

export const ElibraryCategories: FC<CategoriesProps> = ({ data, categoryTitle, categoryLink, position = 'column' }): JSX.Element => {
  return (
    <div className={classNames(styles.categories, {
      [styles.fixed]: position === 'row'
    })}>
      <div className="sectionTitle">
        <Title type='h3'>{categoryTitle}</Title>
      </div>
      <div className={classNames(styles.wrapp, {
        [styles.row]: position === 'row',
        [styles.column]: position === 'column'
      })}>
        {data.map(c => (
          <div className={styles.categoty} key={c.id}>
            <Link href={`/${categoryLink}/${c.alias}`}>
              <a>
                {
                  c.image
                    ?
                    <div className={styles.image}>
                      <img src={c.image} alt={c.title} />
                      <div className={styles.title}>
                        <Title type='h4'>{c.title}</Title>
                      </div>
                    </div>
                    :
                    <div className={styles.title}>
                      <Title type='h4'>{c.title}</Title>
                    </div>
                }
              </a>
            </Link>
            {
              c.totalBooks
              &&
              <div className={styles.information}>
                книг в данной категории:
                <span>{c.totalBooks}</span>
              </div>
            }
            <div className={styles.icon}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="#3164F4" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99997 0L13.293 3.293L6.29297 10.293L7.70697 11.707L14.707 4.707L18 8V0H9.99997Z" />
                <path d="M16 16H2V2H9L7 0H2C0.897 0 0 0.897 0 2V16C0 17.103 0.897 18 2 18H16C17.103 18 18 17.103 18 16V11L16 9V16Z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
