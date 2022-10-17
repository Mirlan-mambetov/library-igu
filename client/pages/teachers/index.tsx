import { NextSeo } from 'next-seo'
import { FC } from 'react'
import { Categories, Filefields, Hero, Title } from '../../components'
import { CategoryI } from '../../Interfaces/Categories.interface'
import { FileI } from '../../Interfaces/Files.interface'
import { HeroI } from '../../Interfaces/Hero.interface'
import { withLayout } from '../../Layout/WithLayout'


// STYLES
import styles from './teachers.module.scss'

const TeachersPage: FC = (): JSX.Element => {
  // Hero Data
  const HeroData: HeroI[] = [
    {
      title: 'Труды преподавателей ИГУ ',
    }
  ]
  // Categories Data
  const CategoriesData: CategoryI[] = [
    { id: 1, title: 'Авторефераты диссертаций', subTitle: 'авторефераты диссертаций преподавателй игу', alias: 'referats' },
    { id: 2, title: 'Научные статьи', subTitle: 'Научные статьи', alias: 'articles' },
    { id: 3, title: 'Монографии', subTitle: 'Монографии', alias: 'monographs' },
    { id: 4, title: 'Научно-методические издания', subTitle: 'Научно-методические издания', alias: 'scentific' }
  ]
  // Remaining Data
  const RemainingData: FileI[] = [
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
        title="Труды преподавателей - Научная библиотека ИГУ"
        description="Научная библиотека ИГУ"
      />
      {/* Hero */}
      {HeroData.map((data, i) => (
        <Hero
          key={i}
          title={data.title}
        />
      ))}
      {/* Categories */}
      <section className={styles.categories}>
        <div className="container">
          <div className="sectionTitle">
            <Title type='h3'>Категории</Title>
          </div>
          <Categories category={CategoriesData} categoryLink="teachers" />
        </div>
      </section>
      <section className={styles.remainings}>
        <div className="container">
          <div className="sectionTitle">
            <Title type='h3'>Недавние</Title>
          </div>
          <div className={styles.files}>
            <Filefields data={RemainingData} orientation="row" />
          </div>
        </div>
      </section>
    </>
  )
}

export default withLayout(TeachersPage)