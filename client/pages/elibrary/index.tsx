import { NextSeo } from 'next-seo'
import { FC } from 'react'
import { Bookscard, ElibraryCategories, Hero, Title } from '../../components'
import { BookscardI } from '../../Interfaces/Bookscard.interface'
import { ElibraryCategoryI } from '../../Interfaces/Categories.interface'
import { HeroI } from '../../Interfaces/Hero.interface'
import { withLayout } from '../../Layout/WithLayout'


// STYLES
import styles from './elibrary.module.scss'

const Elibrary: FC = (): JSX.Element => {
  // Hero Data
  const HeroData: HeroI[] = [
    {
      title: 'Электронная библиотека ИГУ',
      subContent: [
        { id: 1, title: 'Для того чтобы скачивать и просматривать, Вам необходимо авторизоваться в системе' },
        { id: 2, title: 'Чтобы получить доступ к электронной библиотеке, обратитесь к администрации библиотеки через форму обращения' }
      ]
    }
  ]
  // Books card
  const BookscardData: BookscardI[] = [
    { id: 1, image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665232900/Library-igu/news/card2_w16gcf.png' },
    { id: 2, image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665232904/Library-igu/news/card3_mgwvo1.png' },
    { id: 3, image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665232907/Library-igu/news/card1_ymzwfw.png' },
    { id: 4, image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665232893/Library-igu/news/card4_ji6esk.png' }
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
          subContent={h.subContent}
          subContentOrientation="row"
          button
        />
      ))}
      {/* Remainings books */}
      <section className={styles.remaining}>
        <div className="container">
          <div className={styles.remainignWrapp}>
            <div className="sectionTitle">
              <Title type='h3'>Недавние в электронной библиотеке</Title>
            </div>
            <div className={styles.books}>
              {BookscardData.map(books => (
                <Bookscard data={books} key={books.id} />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Categories */}
      <section className={styles.categories}>
        <div className="container">
          <div className={styles.category}>
            <ElibraryCategories categoryTitle='Категории' data={CategoriesData} categoryLink="elibrary" />
          </div>
        </div>
      </section>
    </>
  )
}

export default withLayout(Elibrary)