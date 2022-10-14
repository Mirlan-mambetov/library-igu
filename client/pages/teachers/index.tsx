import { NextSeo } from 'next-seo'
import { FC } from 'react'
import { Categories, FileFields, Hero, Title } from '../../components'
import { BooksI } from '../../interfaces/Books.interface'
import { CategoryI } from '../../interfaces/Category.interface'
import { withLayout } from '../../Layout/WithLayout'


// STYLES
import classes from './teachers.module.scss'


const Teachers: FC = (): JSX.Element => {
  // Categories
  const categoriesData: CategoryI[] = [
    { id: 1, description: 'авторефераты диссертаций преподавателй игу', title: 'Авторефераты диссертаций' },
    { id: 2, description: 'Монографии', title: 'Монографии' },
    { id: 3, description: 'Научно-методические издания', title: 'Научно-методические издания' },
    { id: 4, description: 'Научные статьи', title: 'Научные статьи' },
  ]
  // recent books
  const recentData: BooksI[] = [
    { id: 1, downloaded: 412, createdAt: 'Май 2022', link: '', text: 'Негизги Мектептин Математика Курсунда Окуучуларга Туюнтмаларды Теңдеш Өзгөртүп Түзүүнү Окутуунун Методикасы', auhtors: ['Амантурова. Ч.К.', 'Малаев. Э.Т.'], views: 2 },
    { id: 2, downloaded: 231, createdAt: 'Май 2022', link: '', text: 'Негизги Мектептин Математика Курсунда Окуучуларга Туюнтмаларды Теңдеш Өзгөртүп Түзүүнү Окутуунун Методикасы', auhtors: ['Амантурова. Ч.К.', 'Малаев. Э.Т.'], views: 3334 },
    { id: 3, downloaded: 314, createdAt: 'Май 2022', link: '', text: 'Негизги Мектептин Математика Курсунда Окуучуларга Туюнтмаларды Теңдеш Өзгөртүп Түзүүнү Окутуунун Методикасы', auhtors: ['Амантурова. Ч.К.', 'Малаев. Э.Т.'], views: 2134 },
    { id: 4, downloaded: 437, createdAt: 'Май 2022', link: '', text: 'Негизги Мектептин Математика Курсунда Окуучуларга Туюнтмаларды Теңдеш Өзгөртүп Түзүүнү Окутуунун Методикасы', auhtors: ['Амантурова. Ч.К.', 'Малаев. Э.Т.'], views: 231 },
    { id: 5, downloaded: 435, createdAt: 'Май 2022', link: '', text: 'Негизги Мектептин Математика Курсунда Окуучуларга Туюнтмаларды Теңдеш Өзгөртүп Түзүүнү Окутуунун Методикасы', auhtors: ['Амантурова. Ч.К.', 'Малаев. Э.Т.'], views: 347 },
    { id: 6, downloaded: 324, createdAt: 'Май 2022', link: '', text: 'Негизги Мектептин Математика Курсунда Окуучуларга Туюнтмаларды Теңдеш Өзгөртүп Түзүүнү Окутуунун Методикасы', auhtors: ['Амантурова. Ч.К.', 'Малаев. Э.Т.'], views: 845 },
    { id: 7, downloaded: 12, createdAt: 'Май 2022', link: '', text: 'Негизги Мектептин Математика Курсунда Окуучуларга Туюнтмаларды Теңдеш Өзгөртүп Түзүүнү Окутуунун Методикасы', auhtors: ['Амантурова. Ч.К.', 'Малаев. Э.Т.'], views: 9875 },
    { id: 8, downloaded: 23, createdAt: 'Май 2022', link: '', text: 'Негизги Мектептин Математика Курсунда Окуучуларга Туюнтмаларды Теңдеш Өзгөртүп Түзүүнү Окутуунун Методикасы', auhtors: ['Амантурова. Ч.К.', 'Малаев. Э.Т.'], views: 346 }
  ]
  return (
    <>
      <NextSeo
        title="Труды преподавателей - Научная библиотека ИГУ"
        description="Научная библиотека ИГУ"
      />
      {/* Hero section */}
      <Hero
        title="Труды преподавателей"
      />
      {/* Categories */}
      <div className="container">
        <div className={classes.categories}>
          <Categories categories={categoriesData} link="teachers" />
        </div>
        {/* Recents */}
        <div className={classes.recents}>
          <Title type='h3'>недавние</Title>
          <FileFields books={recentData} />
        </div>
      </div>
    </>
  )
}

export default withLayout(Teachers)