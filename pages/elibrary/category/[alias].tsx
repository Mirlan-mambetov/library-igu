import { Layout } from '../../../Layout/Layout'
// STYLES
import styles from './category.module.scss'
import { NextSeo } from 'next-seo'
import { FC } from 'react'

const Category: FC = (): JSX.Element => {
	return (
		<Layout>
			<NextSeo
				title='Электронная библиотека ИГУ - Научная библиотека ИГУ'
				description='Электронная библиотека ИГУ Научная библиотека ИГУ'
			/>
			{/* Hero */}
			{/* {HeroData.map((h, i) => (
        <Hero
          key={i}
          title={h.title}
          subTitle={h.subTitle}
        />
      ))} */}
			{/* Content */}
			<section className={styles.content}>
				<div className='container'>
					<div className={styles.contentWrapp}>
						<div className={styles.category}>
							{/* <ElibraryCategories
                categoryTitle='Категория книг'
                data={CategoryData}
                position="row"
                categoryLink='elibrary/books'
              /> */}
						</div>
						<div className={styles.category}>
							{/* <ElibraryCategories
                categoryTitle='Категории'
                data={CategoriesData}
                position="row"
                categoryLink='elibrary/category'
              /> */}
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Category
