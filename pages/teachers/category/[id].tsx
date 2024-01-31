import { GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'
import { FC } from 'react'
import { Layout } from '../../../Layout/Layout'
import { Hero, TeacherCategories, TeachersFileList } from '../../../components'
import { ITeachersCategory } from '../../../interfaces/teachers.interface'
import { teacherService } from '../../../services/teacherService/teacherService'
import styles from './category.module.scss'

interface ICategoryPage {
  category: ITeachersCategory
  categories: ITeachersCategory[]
}

const CategoryPage: FC<ICategoryPage> = ({ categories, category }) => {
  const totalWorks = category?.works.flatMap((w) => w.id).length
  return (
    <Layout>
      <NextSeo
        title={`${
          category ? category.name : 'Труды преподавателей'
        } - Научная библиотека ИГУ`}
        description="Научная библиотека ИГУ"
      />
      {/* Hero */}
      {category && (
        <Hero
          // @ts-ignore
          data={{
            title: category.name,
            infoTitle: 'Всего работ',
            totalArticle: totalWorks
          }}
        />
      )}
      <section className={styles.content}>
        <div className="container">
          <div className={styles.wrapp}>
            <div className={styles.files}>
              {category && <TeachersFileList categoryId={category.id} />}
            </div>
            <div className={styles.categories}>
              {categories && (
                <TeacherCategories
                  category={categories}
                  categoryLink="teachers"
                  position="fixed"
                  categoryTitle="Категории"
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
    const { data: categories } = await teacherService.fetchAllCategories()
    // @ts-ignore
    const { data: category } = await teacherService.fetchCategoyById(+params.id)
    return {
      props: {
        categories,
        category
      }
    }
  } catch (e) {
    return {
      props: {
        categories: [] as ITeachersCategory[],
        category: {} as ITeachersCategory
      } as ICategoryPage,
      notFound: true
    }
  }
}

export default CategoryPage
