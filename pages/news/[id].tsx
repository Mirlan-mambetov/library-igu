import { HeroI } from '../../Interfaces/Hero.interface'
import { ImageboxI } from '../../Interfaces/Imagebox.interface'
import { NewsI } from '../../Interfaces/News.interface'
import { withLayout } from '../../Layout/WithLayout'
import { Button, Cards, Hero, Imagebox, Title } from '../../components'
import { newsApi } from '../../store/api/news/news.api'
// STYLES
import styles from './news.module.scss'
import { GetStaticPaths } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

const News: FC = (): JSX.Element => {
	const { query } = useRouter()

	return (
		<>
			<NextSeo
				title='Новость - Научная библиотека ИГУ'
				description='Научная библиотека ИГУ Вестник ИГУ им. К. Тыныстанова'
			/>
			{/* Hero */}
			{/* {HeroData.map((h, i) => (
        <Hero
          key={i}
          title={h.title}
          subContent={h.subContent}
          background={h.backGround}
          subContentOrientation="row"
        />
      ))} */}
			{/* News description */}
			<section className={styles.description}>
				<div className='container'>
					{/* {DetailNewsData.map(news => (
            <Imagebox data={news} key={news.id} />
          ))} */}
					{query.id}
				</div>
			</section>
			{/* News cards */}
			<section className={styles.cards}>
				<div className='container'>
					<div className='sectionTitle'>
						<Title type='h3'>Читайте также</Title>
					</div>
					<div className={styles.cardsWrapp}>
						{/* {NewsData.map(news => (
              <Cards data={news} key={news.id} cardsLink="news" />
            ))} */}
						<div className={styles.cardsBtn}>
							<Link href={'/news/arhiv'}>
								<a>
									<Button>Архив новостей</Button>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

// export const getStaticPaths: GetStaticPaths = () => {
//   try{
//     const paths = newsApi.useFetchAllNewsQuery()

//   }catch(err) {
//     return {
//       paths,
//       fallback: false
//     }
//   }
// }

export default withLayout(News)
