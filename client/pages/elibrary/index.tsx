import { NextSeo } from 'next-seo'
import { FC } from 'react'
import { Hero, ImageCards, Title } from '../../components'
import { withLayout } from '../../Layout/WithLayout'
import { HeroProps } from '../../components/Hero/Hero.props'
import { ImageCardsProps } from '../../components/ImageCards/ImageCards.props'
import { BooksCategory } from '../../interfaces/Books.interface'
import Link from 'next/link'

// STYLES
import classes from './elibrary.module.scss'

const Elibrary: FC = (): JSX.Element => {
  // HeroData
  const heroData: HeroProps[] = [
    {
      title: 'Электронная библиотека',
      button: { name: 'Войти' },
      content: [
        { id: 1, title: 'Для того чтобы скачивать и просматривать, Вам необходимо авторизоваться в системе' },
        { id: 2, title: 'Чтобы получить доступ к электронной библиотеке, обратитесь к администрации библиотеки через форму обращения или онлайн оператором' }
      ]
    }
  ]
  // Books 
  const booksData: ImageCardsProps[] = [
    {
      images: [
        { id: 1, image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665470810/Library-igu/books/b2_r8ekaj.png' },
        { id: 2, image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665470821/Library-igu/books/b3_ibvkso.png' },
        { id: 3, image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665470825/Library-igu/books/b4_oe4so9.png' },
        { id: 4, image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665470912/Library-igu/books/b5_ogcmv7.png' },
        { id: 5, image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665470928/Library-igu/books/b6_nisn0d.png' }
      ]
    }
  ]
  // Books Category
  const booksCategoryData: BooksCategory[] = [
    {
      id: 1,
      name: 'Магистратура',
      totalBooks: 223,
      image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665475544/Library-igu/categories/c2_yamxmt.png'
    },
    {
      id: 2,
      name: 'Бакалавриат',
      totalBooks: 143,
      image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665475538/Library-igu/categories/c1_oi9ou2.png'
    },
    {
      id: 3,
      name: 'Школьные',
      totalBooks: 321,
      image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665475560/Library-igu/categories/c3_vtij8z.png'
    },
    {
      id: 4,
      name: 'СПО',
      totalBooks: 545,
      image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665475564/Library-igu/categories/c4_m06tly.png'
    }
  ]
  return (
    <>
      <NextSeo
        title="Вестник Иссык-Кульского государственного университета - Научная библиотека ИГУ"
        description="Научная библиотека ИГУ,Вестник игу"
      />
      {/* Hero section */}
      <div className={classes.hero}>
        {heroData.map((h, i) => (
          <Hero
            key={i}
            title={h.title}
            content={h.content}
            button={h.button}
          />
        ))}
      </div>
      {/* Недавние в электронной библиотеке */}
      <div className="container">
        <div className={classes.newInLib}>
          <Title type='h3'>Недавние в электронной библиотеке</Title>
          {booksData.map((i, index) => (
            <div className={classes.books} key={index}>
              <ImageCards images={i.images} />
            </div>
          ))}
        </div>
        {/* Categories */}
        <div className={classes.categories}>
          <Title type='h3'>категории</Title>
          <div className={classes.categoryWrapp}>
            {booksCategoryData.map(c => (
              <div className={classes.category} key={c.id}>
                <Link href={`/elibrary/category/${c.id}`}>
                  <a>
                    <div className={classes.categoryImage}>
                      <img src={c.image} alt={c.name} />
                      <span className={classes.categoryName}>{c.name}</span>
                    </div>
                  </a>
                </Link>
                <div className={classes.categoryInfo}>
                  <span>Книг в данной категории: {c.totalBooks}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default withLayout(Elibrary)