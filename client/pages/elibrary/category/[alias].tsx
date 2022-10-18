import { NextSeo } from 'next-seo'
import { FC } from 'react'
import { ElibraryCategories, Hero, Title } from '../../../components'
import { HeroI } from '../../../Interfaces/Hero.interface'
import { withLayout } from '../../../Layout/WithLayout'
import { ElibraryCategoryI } from '../../../Interfaces/Categories.interface'


// STYLES
import styles from './category.module.scss'

const Category: FC = (): JSX.Element => {
  // Hero Data
  const HeroData: HeroI[] = [
    {
      title: 'Электронная библиотека ИГУ',
      subTitle: 'СПО - среднее специальное'
    }
  ]
  // Category
  const CategoryData: ElibraryCategoryI[] = [
    { id: 1, alias: 'kyrgyz-language', title: 'Кыргыз тили жана адабияты (магистратура)' },
    { id: 2, alias: 'electric', title: 'Электроснабжение (магистратура)' },
    { id: 3, alias: 'phisics', title: 'Физика (магистр)' },
    { id: 4, alias: 'professionals', title: 'Профессиональное образование (магистратура)' },
    { id: 5, alias: 'professionals', title: 'Педагогика и психология (магистратура)' },
    { id: 6, alias: 'professionals', title: 'Химия (магистратура)' },
    { id: 7, alias: 'professionals', title: 'Математика (Магистратура)' },
    { id: 8, alias: 'professionals', title: 'Информационные технологии (магистратура)' },
    { id: 9, alias: 'professionals', title: 'Философия (магистратура)' },
    { id: 10, alias: 'professionals', title: 'Наука (магистратура)' },
    { id: 11, alias: 'professionals', title: 'Биология (магистратура)' },
    { id: 12, alias: 'professionals', title: 'Русский язык и литература(магистратура) ' },
    { id: 13, alias: 'professionals', title: 'Экономика образования(магистратура) ' }
  ]
  // Categories Data
  const CategoriesData: ElibraryCategoryI[] = [
    { id: 1, alias: 'mastersdegree', title: 'Магистратура', image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665475564/Library-igu/categories/c4_m06tly.png', totalBooks: 241 },
    { id: 2, alias: 'undergraduate', title: 'Бакалавриат', image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665475560/Library-igu/categories/c3_vtij8z.png', totalBooks: 21 },
    { id: 3, alias: 'school', title: 'Школьные', image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665475544/Library-igu/categories/c2_yamxmt.png', totalBooks: 342 },
    { id: 4, alias: 'colledge', title: 'СПО', image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665475538/Library-igu/categories/c1_oi9ou2.png', totalBooks: 12 }
  ]
  return (
    <>
      <NextSeo
        title="Электронная библиотека ИГУ - Научная библиотека ИГУ"
        description="Электронная библиотека ИГУ Научная библиотека ИГУ"
      />
      {/* Hero */}
      {HeroData.map((h, i) => (
        <Hero
          key={i}
          title={h.title}
          subTitle={h.subTitle}
        />
      ))}
      {/* Content */}
      <section className={styles.content}>
        <div className="container">
          <div className={styles.contentWrapp}>
            <div className={styles.category}>
              <ElibraryCategories categoryTitle='Категория книг' data={CategoryData} position="row" categoryLink='books' />
            </div>
            <div className={styles.category}>
              <ElibraryCategories categoryTitle='Категории' data={CategoriesData} position="row" categoryLink='elibrary' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default withLayout(Category)