import { Layout } from '../../Layout/Layout'
import { Button } from '../../components'
import styles from './kyrgyz.language.module.scss'
import { NextSeo } from 'next-seo'
import React from 'react'

const KyrgyzLanguagePage = () => {
	return (
		<Layout>
			<NextSeo
				title='Кыргыз - тили жана адабияты - Научная библиотека ИГУ'
				description='Кыргыз - тили жана адабияты Научная библиотека ИГУ'
			/>
			{/* Hero */}
			{/* {HeroData.map((h, i) => (
				<Hero
					key={i}
					title={h.title}
					subContent={h.subContent}
					subContentOrientation='row'
				/>
			))} */}
			{/* About jurnal */}
			<section className={styles.aboutJurnal}>
				{/* <div className='container'>
					{JurnalData.map((jurnal) => (
						<Jurnal {...jurnal} key={jurnal.id} />
					))}
				</div> */}
			</section>
			{/* Arhivs */}
			<div className='container'>
				<div className={styles.arhivs}>
					{/* {ArhivsData.map((arhiv, i) => (
						<Arhivs data={arhiv} key={i} contentLink='kyrgyz-language' />
					))} */}
					<div className={styles.arhivsBtn}>
						<Button orientation='right'>Показать больше архивов</Button>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default KyrgyzLanguagePage
