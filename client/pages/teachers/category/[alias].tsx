import { NextSeo } from 'next-seo'
import { FC } from 'react'
import { Categories, Filefields, Hero, Title } from '../../../components'
import { CategoryI } from '../../../Interfaces/Categories.interface'
import { FileI } from '../../../Interfaces/Files.interface'
import { HeroI } from '../../../Interfaces/Hero.interface'
import { withLayout } from '../../../Layout/WithLayout'


// STYLES
import styles from './category.module.scss'

const CategoryPage: FC = (): JSX.Element => {
  // Hero Data
  const HeroData: HeroI[] = [
    {
      title: 'Труды преподавателей ИГУ',
      subTitle: 'Авторефераты диссертаций',
      information: 2242
    }
  ]
  // Remaining Data
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
  // Categories Data
  const CategoriesData: CategoryI[] = [
    { id: 1, title: 'Авторефераты диссертаций', subTitle: 'авторефераты диссертаций преподавателй игу', alias: 'referats' },
    { id: 2, title: 'Научные статьи', subTitle: 'Научные статьи', alias: 'articles' },
    { id: 3, title: 'Монографии', subTitle: 'Монографии', alias: 'monographs' },
    { id: 4, title: 'Научно-методические издания', subTitle: 'Научно-методические издания', alias: 'scentific' }
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
          subTitle={data.subTitle}
          information={data.information}
        />
      ))}
      <section className={styles.content}>
        <div className="container">
          <div className={styles.wrapp}>
            <div className={styles.files}>
              <Filefields data={FilesData} orientation="column" />
            </div>
            <div className={styles.categories}>
              <Categories
                category={CategoriesData}
                categoryLink="teachers"
                position='fixed'
                categoryTitle='Категории'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default withLayout(CategoryPage)