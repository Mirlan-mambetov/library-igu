import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { FC } from 'react'
import { Title } from '../../components'


// STYLES
import styles from './notfound.module.scss'

const NotFound: FC = (): JSX.Element => {
  return (
    <>
      <NextSeo
        title="Страница не найдена - Научная библиотека ИГУ"
        noindex
      />
      <div className={styles.notFound}>
        <div className="container">
          <Title type='h3'>К сожалению страницу которую вы запросили, не существует..</Title>
          <Link href="/">
            <a className={styles.link}>Вернуться</a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default NotFound