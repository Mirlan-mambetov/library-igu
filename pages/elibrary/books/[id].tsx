import { Title } from '../../../components'
// STYLES
import styles from './books.module.scss'
import { NextSeo } from 'next-seo'
import { FC } from 'react'

const BooksPage: FC = (): JSX.Element => {
	return (
		<>
			<NextSeo
				title='Электронная библиотека ИГУ - Научная библиотека ИГУ'
				description='Электронная библиотека ИГУ Научная библиотека ИГУ'
			/>
			{/* Hero */}
			{/* {HeroData.map((h, i) => (
        <Hero
          key={i}
          title={h.title}
          subContent={h.subContent}
          subTitle={h.subTitle}
          subContentOrientation="row"
        />
      ))} */}
			{/* Remainings books */}
			<section className={styles.remaining}>
				<div className='container'>
					<div className={styles.remainignWrapp}>
						<div className='sectionTitle'>
							<Title type='h3'>Недавние в электронной библиотеке</Title>
						</div>
						<div className={styles.books}>
							{/* {BookscardData.map(books => (
                <Bookscard data={books} key={books.id} />
              ))} */}
						</div>
					</div>
				</div>
			</section>
			{/* Content */}
			<section>
				<div className='container'>
					<div className={styles.content}>
						<div className={styles.files}>
							{/* <Filefields data={FilesData} /> */}
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
		</>
	)
}

export default BooksPage
