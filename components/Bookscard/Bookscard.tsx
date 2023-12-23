// STYLES
import styles from './Bookscard.module.scss'
import { BookscardProps } from './Bookscard.props'
import Image from 'next/image'
import { FC } from 'react'

export const Bookscard: FC<BookscardProps> = ({ data }): JSX.Element => {
  return (
    <div className={styles.bookscard}>
      <Image
        src={`${process.env.NEXT_PUBLIC_APP_STATIC}/${data.image}`}
        width={300}
        height={300}
      />
    </div>
  )
}
