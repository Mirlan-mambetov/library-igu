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
            <Link href={`/${categoryLink}/category/${c.alias}`}>
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
          </div>
        ))}
      </div>
    </div>
  )
}
