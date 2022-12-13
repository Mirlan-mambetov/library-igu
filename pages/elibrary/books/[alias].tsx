import { NextSeo } from 'next-seo'
import { FC } from 'react'
import { Bookscard, ElibraryCategories, Filefields, Hero, Title } from '../../../components'
import { BookscardI } from '../../../Interfaces/Bookscard.interface'
import { ElibraryCategoryI } from '../../../Interfaces/Categories.interface'
import { FileI } from '../../../Interfaces/Files.interface'
import { HeroI } from '../../../Interfaces/Hero.interface'
import { withLayout } from '../../../Layout/WithLayout'


// STYLES 
import styles from './books.module.scss'

const BooksPage: FC = (): JSX.Element => {
  // Hero Data
  const HeroData: HeroI[] = [
    {
      title: 'Электронная библиотека ИГУ',
      subTitle: 'СПО - среднее специальное',
      subContent: [
        { id: 1, title: 'Кыргыз тили жана адабияты (магистратура)' },
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
  // Content data
  const FilesData: FileI[] = [
    {
      id: 1,
      authors: ['Амантурова. Ч.К.', 'Малаев. Э.Т.', 'Малаев. Э.Т.,', 'Малаев. Э.Т.,'],
      title: 'Негизги Мектептин Математика Курсунда Окуучуларга Туюнтмаларды Теңдеш Өзгөртүп Түзүүнү Окутуунун Методикасы',
      file: 'http://nbisu.moy.su/_ld/24/2462_IGUTOLUBAEVA199.pdf',
      downloaded: 242,
      published: 'Май 2022',
      views: 241,
      category: '№ 1999 / 2'
    },
    {
      id: 2,
      authors: ['Амантурова. Ч.К.', 'Малаев. Э.Т.', 'Малаев. Э.Т.,', 'Малаев. Э.Т.,'],
      title: 'Негизги Мектептин Математика Курсунда Окуучуларга Туюнтмаларды Теңдеш Өзгөртүп Түзүүнү Окутуунун Методикасы',
      file: 'http://nbisu.moy.su/_ld/24/2462_IGUTOLUBAEVA199.pdf',
      downloaded: 242,
      published: 'Май 2022',
      views: 241,
      category: '№ 1999 / 2'
    },
    {
      id: 3,
      authors: ['Амантурова. Ч.К.', 'Малаев. Э.Т.', 'Малаев. Э.Т.,', 'Малаев. Э.Т.,'],
      title: 'Негизги Мектептин Математика Курсунда Окуучуларга Туюнтмаларды Теңдеш Өзгөртүп Түзүүнү Окутуунун Методикасы',
      file: 'http://nbisu.moy.su/_ld/24/2462_IGUTOLUBAEVA199.pdf',
      downloaded: 242,
      published: 'Май 2022',
      views: 241,
      category: '№ 1999 / 2'
    },
    {
      id: 4,
      authors: ['Амантурова. Ч.К.', 'Малаев. Э.Т.', 'Малаев. Э.Т.,', 'Малаев. Э.Т.,'],
      title: 'Негизги Мектептин Математика Курсунда Окуучуларга Туюнтмаларды Теңдеш Өзгөртүп Түзүүнү Окутуунун Методикасы',
      file: 'http://nbisu.moy.su/_ld/24/2462_IGUTOLUBAEVA199.pdf',
      downloaded: 242,
      published: 'Май 2022',
      views: 241,
      category: '№ 1999 / 2'
    },
    {
      id: 5,
      authors: ['Амантурова. Ч.К.', 'Малаев. Э.Т.', 'Малаев. Э.Т.,', 'Малаев. Э.Т.,'],
      title: 'Негизги Мектептин Математика Курсунда Окуучуларга Туюнтмаларды Теңдеш Өзгөртүп Түзүүнү Окутуунун Методикасы',
      file: 'http://nbisu.moy.su/_ld/24/2462_IGUTOLUBAEVA199.pdf',
      downloaded: 242,
      published: 'Май 2022',
      views: 241,
      category: '№ 1999 / 2'
    },
    {
      id: 6,
      authors: ['Амантурова. Ч.К.', 'Малаев. Э.Т.', 'Малаев. Э.Т.,', 'Малаев. Э.Т.,'],
      title: 'Негизги Мектептин Математика Курсунда Окуучуларга Туюнтмаларды Теңдеш Өзгөртүп Түзүүнү Окутуунун Методикасы',
      file: 'http://nbisu.moy.su/_ld/24/2462_IGUTOLUBAEVA199.pdf',
      downloaded: 242,
      published: 'Май 2022',
      views: 241,
      category: '№ 1999 / 2'
    }
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
          subTitle={h.subTitle}
          subContentOrientation="row"
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
      {/* Content */}
      <section>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.files}>
              <Filefields data={FilesData} />
            </div>
            <div className={styles.category}>
              <ElibraryCategories
                categoryTitle='Категории'
                data={CategoriesData}
                position="row"
                categoryLink='elibrary/category'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default withLayout(BooksPage)