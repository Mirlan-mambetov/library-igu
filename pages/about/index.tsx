import { Layout } from '../../Layout/Layout'
import { withLayout } from '../../Layout/WithLayout'
import { Hero, Tabs } from '../../components'
import { Owner } from '../../components/About/Owner/Owner'
import { Textbox } from '../../components/About/Textbox/Textbox'
import { IAboutInfo } from '../../interfaces/about.interface'
import { aboutApi } from '../../store/api/about/about.api'
import { pageApi } from '../../store/api/page/page.api'
// STYLES
import styles from './about.module.scss'
import { NextSeo } from 'next-seo'
import { FC } from 'react'

const About: FC = (): JSX.Element => {
	const pageId = 2
	const { data: page } = pageApi.useFetchPageQuery(pageId)
	const { data: aboutInfo = [] as IAboutInfo[] } =
		aboutApi.useFetchAboutInfoQuery(null)
	const { data: aboutOwner } = aboutApi.useFetchAboutOwnerQuery(null)
	const { data: aboutTablo } = aboutApi.useFetchAboutTabloQuery(null)

	return (
		<Layout>
			<NextSeo
				title='О библиотеке - Научная библиотека ИГУ'
				description='О библиотеке Научная библиотека ИГУ'
			/>
			{/* Hero */}
			{page?.hero &&
				page.hero.map((hero) => <Hero data={{ ...hero }} key={hero.id} />)}

			<div className='container'>
				{/* History (Text box component in aboutComponent) ABOUT INFO */}
				<div className={styles.history}>
					{aboutInfo &&
						aboutInfo.map((info) => <Textbox data={info} key={info.id} />)}
				</div>
				{/* ABOUT OWNER */}
				{aboutOwner &&
					aboutOwner.map((owner) => (
						<div className={styles.owner} key={owner.id}>
							<Owner data={owner} />
						</div>
					))}
			</div>
			<section
				className={styles.info}
				style={{
					backgroundImage: `url(https://res.cloudinary.com/djzubalr7/image/upload/v1665335114/Library-igu/2_1_ihlgty.png)`
				}}
			>
				<div className='container'>
					<div className={styles.infoWrapp}>
						{aboutTablo &&
							aboutTablo.map((tablo) => (
								<div className={styles.infoItem} key={tablo.id}>
									<span>{tablo.ceils} +</span>
									{tablo.description}
								</div>
							))}
					</div>
				</div>
			</section>
			<section className={styles.links}>
				<div className='container'>
					<div className={styles.link}>
						{page?.tabs &&
							page.tabs.map((tab) => <Tabs tabs={tab} key={tab.id} />)}
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default About
