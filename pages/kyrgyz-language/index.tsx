import { NextSeo } from 'next-seo'
import { Layout } from '../../Layout/Layout'
import { Hero, Jurnal, Tabs } from '../../components'
import { IPage } from '../../interfaces/page.interface'
import { pageApi } from '../../store/api/page/page.api'
import styles from './kyrgyz.language.module.scss'

const KyrgyzLanguagePage = () => {
  const pageId = 11
  const { data: page = {} as IPage, isLoading } =
    pageApi.useFetchPageQuery(pageId)

  return (
    <Layout>
      <NextSeo
        title="Кыргыз - тили жана адабияты - Научная библиотека ИГУ"
        description="Кыргыз - тили жана адабияты Научная библиотека ИГУ"
      />
      {/* Hero */}
      {page?.hero &&
        page.hero.map((hero) => <Hero data={hero} key={hero.id} />)}
      {/* About jurnal */}
      <div className="container">
        <div className={styles.jurnalAbout}>
          {page?.journal &&
            page.journal.map((j) => <Jurnal {...j} key={j.id} />)}
        </div>
        <div className={styles.aboutVestnik}>
          {page?.tabs &&
            page.tabs.map((tab) => <Tabs tabs={tab} key={tab.id} />)}
        </div>
      </div>
      {/* Arhivs */}
      <div className="container">
        <div className={styles.arhivs}>
          {/* {ArhivsData.map((arhiv, i) => (
						<Arhivs data={arhiv} key={i} contentLink='kyrgyz-language' />
					))} */}
          <div className={styles.arhivsBtn}>
            {/* <Button orientation="right">Показать больше архивов</Button> */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default KyrgyzLanguagePage
