import { GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { FC } from 'react'
import { Layout } from '../../Layout/Layout'
import { Button, Imagebox, NewsComponent, Title } from '../../components'
import { INews } from '../../interfaces/news.interface'
import { newsService } from '../../services/newsService/newsService'
import styles from './news.module.scss'

interface NewsI {
  news: INews
  newses: INews[]
}

const NewsPage: FC<NewsI> = ({ news, newses }) => {
  const currentNews = newses.filter((n) => n.id !== news.id)
  return (
    <Layout>
      <NextSeo
        title={`${news.title} - Научная библиотека ИГУ`}
        description={`Научная библиотека ИГУ Вестник ИГУ им. К. Тыныстанова ${news.title} - ${news.description}`}
      />
      {/* Hero */}
      {/* <Hero data={{ ...news }} /> */}
      {/* News description */}
      <section className={styles.description}>
        <div className="container">
          <Imagebox data={{ ...news }} />
        </div>
      </section>
      {/* News cards */}
      <section className={styles.cards}>
        <div className="container">
          <div className="sectionTitle">
            <Title type="h3">Читайте также</Title>
          </div>
          <div className={styles.cardsWrapp}>
            <NewsComponent data={currentNews} />
          </div>
          <div className={styles.cardsBtn}>
            <Link href={'/news/arhiv'}>
              <a>
                <Button>Архив новостей</Button>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    // @ts-ignore
    const { data: news } = await newsService.findNewsById(+params?.id)
    const { data: newses } = await newsService.findNewsOnLimit(6)
    return {
      props: {
        news,
        newses
      }
    }
  } catch (e) {
    return {
      props: {
        news: {} as INews,
        newses: [] as INews[]
      } as NewsI,
      notFound: true
    }
  }
}

export default NewsPage
