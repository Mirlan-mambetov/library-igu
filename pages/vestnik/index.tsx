import { Layout } from '../../Layout/Layout'
import { Hero, Tabs, Jurnal, Arhivs } from '../../components'
import { IPage } from '../../interfaces/Page.interface'
import { pageApi } from '../../store/api/page/page.api'
// STYLES
import styles from './vestnik.module.scss'
import { NextSeo } from 'next-seo'
import React from 'react'

const Vestnik = () => {
	const pageId = 4
	const { data: page = {} as IPage } = pageApi.useFetchPageQuery(pageId)

	return (
		<Layout>
			<NextSeo
				title={`${page && page.name} - Научная библиотека ИГУ`}
				description='Научная библиотека ИГУ Вестник ИГУ им. К. Тыныстанова'
			/>
			{/* Hero */}
			{page?.hero &&
				page.hero.map((hero) => <Hero data={hero} key={hero.id} />)}
			{/* Jurnal about */}
			<div className='container'>
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
			<div className='container'>
				<div className={styles.arhivs}>
					{page?.vestnik && (
						<Arhivs data={page.vestnik} contentLink='vestnik' />
					)}
				</div>
			</div>
		</Layout>
	)
}

export default Vestnik
