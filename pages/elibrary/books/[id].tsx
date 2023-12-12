import { Layout } from '../../../Layout/Layout'
import {
  Bookscard,
  ElibraryCategories,
  ElibraryFileList,
  Hero,
  Title
} from '../../../components'
import {
  IElibraryCategory,
  IElibraryReamaining,
  IElibrarySecondCategory
} from '../../../interfaces/elibrary.interface'
import { elibraryService } from '../../../services/elibrary/elibraryService'
import styles from './books.module.scss'
import { GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'
import { FC } from 'react'
import { elibraryApi } from '../../../store/api/elibrary/elibrary.api'

interface IBooksPage {
  mainCategories: IElibraryCategory[]
  category: IElibrarySecondCategory
}
const BooksPage: FC<IBooksPage> = ({
  category,
  mainCategories
}): JSX.Element => {
  const totalBooks = category?.books.flatMap((l) => l.id).length
  const { data: reamining = [] as IElibraryReamaining[] } =
    elibraryApi.useFetchElibraryRemainingQuery(null)

  return (
    <Layout>
      <NextSeo
        title={`${
          category ? category?.name : 'Электронная библиотека'
        } Электронная библиотека - Научная библиотека ИГУ`}
        description="Электронная библиотека ИГУ Научная библиотека ИГУ"
      />
      {/* Hero */}
      {category && (
        <Hero
          /* @ts-ignore */
          data={{
            title: category.name,
            infoTitle: 'Всего книг',
            totalArticle: totalBooks
          }}
        />
      )}

      {/* Content */}
      <section>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.files}>
              {category && <ElibraryFileList categoryId={category.id} />}
            </div>
            <div className={styles.category}>
              {mainCategories && (
                <ElibraryCategories
                  categoryTitle="Категории"
                  data={mainCategories}
                  position="row"
                  categoryLink="elibrary/category"
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const { data: mainCategories } =
      await elibraryService.fetchAllMainCategories()
    const { data: category } = await elibraryService.fetchSecondCategoryById(
      // @ts-ignore
      +params.id
    )
    return {
      props: {
        mainCategories,
        category
      }
    }
  } catch (e) {
    return {
      props: {
        mainCategories: [] as IElibraryCategory[],
        category: {} as IElibrarySecondCategory
      } as IBooksPage,
      notFound: true
    }
  }
}
export default BooksPage
