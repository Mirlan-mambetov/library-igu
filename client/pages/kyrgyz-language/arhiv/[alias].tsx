import { NextSeo } from 'next-seo'
import { FC } from 'react'
import { Button, Category, Filefields, Hero } from '../../../components'
import { ArhivsLink } from '../../../Interfaces/Arhivs.interface'
import { FileI } from '../../../Interfaces/Files.interface'
import { HeroI } from '../../../Interfaces/Hero.interface'
import { withLayout } from '../../../Layout/WithLayout'


// STYLES
import styles from './arhiv.module.scss'

const Arhiv: FC = (): JSX.Element => {
  // Hero Data
  const HeroData: HeroI[] = [
    {
      title: 'Кыргыз - тили жана адабияты',
      subTitle: '№ 1999 / 2',
      information: 3533
    }
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
  // Arhiivs
  const ArhivsData: ArhivsLink[] = [
    { id: 1, alias: '№11999', name: '№ 1 / 1999' },
    { id: 2, alias: '№12000', name: '№ 1 / 2000' },
    { id: 3, alias: '№12001', name: '№ 1 / 2001' },
    { id: 4, alias: '№12002', name: '№ 1 / 2002' },
    { id: 5, alias: '№12003', name: '№ 1 / 2003' },
    { id: 6, alias: '№12004', name: '№ 1 / 2004' },
    { id: 7, alias: '№12005', name: '№ 1 / 2005' },
    { id: 8, alias: '№12006', name: '№ 1 / 2006' },
    { id: 9, alias: '№12007', name: '№ 1 / 2007' },
    { id: 10, alias: '№12008', name: '№ 1 / 2008' }
  ]
  return (
    <>
      <NextSeo
        title="Кыргыз - тили жана адабияты - Научная библиотека ИГУ"
        description="Научная библиотека ИГУ"
      />
      {/* Hero */}
      {HeroData.map((data, i) => (
        <Hero
          key={i}
          title={data.title}
          background={data.backGround}
          subTitle={data.subTitle}
          subContent={data.subContent}
          information={data.information}
        />
      ))}
      {/* Content */}
      <section className={styles.content}>
        <div className="container">
          <div className={styles.contentWrapp}>
            <div className={styles.files}>
              <Filefields data={FilesData} />
              <div className={styles.filesBtn}>
                <Button orientation='bottom'>показать больше</Button>
              </div>
            </div>
            <div className={styles.categories}>
              <Category data={ArhivsData} arhivsLink="kyrgyz-language" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default withLayout(Arhiv)