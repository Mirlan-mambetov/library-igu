import { FC } from 'react'
import { BookscardProps } from './Bookscard.props'


// STYLES
import styles from './Bookscard.module.scss'

export const Bookscard: FC<BookscardProps> = ({ data }): JSX.Element => {
  return (
    <div className={styles.bookscard}>
      <img src={data.image} alt={data.image} />
    </div>
  )
}
