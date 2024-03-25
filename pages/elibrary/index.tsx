import { NextSeo } from 'next-seo'
import { FC } from 'react'
import { Layout } from '../../Layout/Layout'
import { ElibraryCategories, Hero } from '../../components'
import {
  IElibraryCategory,
  IElibraryReamaining
} from '../../interfaces/elibrary.interface'
import { IPage } from '../../interfaces/page.interface'
import { elibraryApi } from '../../store/api/elibrary/elibrary.api'
import { pageApi } from '../../store/api/page/page.api'
import styles from './elibrary.module.scss'

const Elibrary: FC = (): JSX.Element => {
  const pageId = 6
  const { data: page = {} as IPage } = pageApi.useFetchPageQuery(pageId)
  const { data: categories = [] as IElibraryCategory[] } =
    elibraryApi.useFetchMainCategoriesQuery(null)

  const { data: reamining = [] as IElibraryReamaining[] } =
    elibraryApi.useFetchElibraryRemainingQuery(null)

  return (
    <Layout>
      <NextSeo
        title="Электронная библиотека ИГУ - Научная библиотека ИГУ"
        description="Электронная библиотека ИГУ Научная библиотека ИГУ"
      />
      {/* Hero */}
      {page.hero && page.hero.map((h) => <Hero data={h} key={h.id} />)}
      {/* Remainings books */}
      {/* <section className={styles.remaining}>
				<div className='container'>
					<div className={styles.remainignWrapp}>
						<div className='sectionTitle'>
							<Title type='h3'>Недавние в электронной библиотеке</Title>
						</div>
						<div className={styles.books}>
							{reamining &&
								reamining.map((remaing) => (
									<Bookscard key={remaing.id} data={remaing} />
								))}
						</div>
					</div>
				</div>
			</section> */}
      {/* Categories */}
      <section className={styles.categories}>
        <div className="container">
          <ElibraryCategories
            categoryTitle="Категории"
            data={categories}
            categoryLink="elibrary/category"
          />
        </div>
      </section>
    </Layout>
  )
}

export default Elibrary
