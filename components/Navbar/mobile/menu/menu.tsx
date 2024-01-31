import classNames from 'classnames'
import { FC } from 'react'
import { MenuProps } from './menu.props'

// STYLES
import Link from 'next/link'
import styles from './menu.module.scss'

export const MenuNavigation: FC<MenuProps> = ({ active }): JSX.Element => {
  return (
    <div className={classNames(styles.menu, { [styles.active]: active })}>
      <div className="container">
        <div className={styles.wrapp}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link href="/">
                <a>Главная</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/about">
                <a>О библиотеке</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/vestnik">
                <a>Вестник</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/services">
                <a>Сервисы</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/window">
                <a>Единое окно</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/education">
                <a>Центр обучения</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/teachers">
                <a>Труды преподавателей</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/kyrgyz-language">
                <a>Кыргыз тили жана адабияты</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/elibrary">
                <a>Электронная библиотека</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/internet-links">
                <a>Электронные ресурсы</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
