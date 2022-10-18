import { FC } from 'react'
import { CategoriesProps } from './Categories.props'
import { Title } from '../../Title/Title'

// STYLES
import styles from './Categories.module.scss'
import Link from 'next/link'

export const ElibraryCategories: FC<CategoriesProps> = ({ data, categoryLink }): JSX.Element => {
  return (
    <div className={styles.categories}>

    </div>
  )
}
