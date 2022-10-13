import { FC } from 'react'
import { NextSeo } from 'next-seo'
import { ArhivsCategory, FileFields, Hero, Title } from '../../../components'
import { withLayout } from '../../../Layout/WithLayout'
import { HeroProps } from '../../../components/Hero/Hero.props'
import { VestnikCategoryInterface } from '../../../interfaces/Vestnik.interface'
import { BooksI } from '../../../interfaces/Books.interface'


// STYLES 
import classes from './Arhiv.module.scss'

const Arhiv: FC = (): JSX.Element => {
  // Hero data
  const heroData: HeroProps[] = [
    {
      title: 'Вестник Иссык-Кульского государственного университета',
      subTitle: 'архив № 1999 / 2',
      arhivInfo: 214
    }
  ]
  // Arhivs
  const arhivsData: VestnikCategoryInterface[] = [
    { id: 1, alias: '№11999', name: '№ 1 / 1999' },
    { id: 2, alias: '№11999', name: '№ 1 / 1999' },
    { id: 3, alias: '№11999', name: '№ 1 / 1999' },
    { id: 4, alias: '№11999', name: '№ 1 / 1999' },
    { id: 5, alias: '№11999', name: '№ 1 / 1999' },
    { id: 6, alias: '№11999', name: '№ 1 / 1999' },
  ]
  // arhivsFiles
  const arhivsFiles: BooksI[] = [
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
        title="Главная - Научная библиотека ИГУ"
        description="Научная библиотека ИГУ"
      />
      {/* Hero section */}
      {heroData.map((h, i) => (
        <Hero
          key={i}
          title={h.title}
          subTitle={h.subTitle}
          arhivInfo={h.arhivInfo}
        />
      ))}
      <div className="container">
        {/* Content */}
        <div className={classes.content}>
          <div className={classes.files}>
            <FileFields books={arhivsFiles} position='row' button />
          </div>
          <div className={classes.categories}>
            <Title type='h3'>Категории</Title>
            <ArhivsCategory arhivs={arhivsData} link="vestnik" />
          </div>
        </div>

      </div>
    </>
  )
}
export default withLayout(Arhiv)