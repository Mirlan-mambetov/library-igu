import { Layout } from '../../../Layout/Layout'
import { Button } from '../../../components'
import styles from './arhiv.module.scss'
import { NextSeo } from 'next-seo'
import { FC } from 'react'

const Arhiv: FC = (): JSX.Element => {
	return (
		<Layout>
			<NextSeo
				title='Кыргыз - тили жана адабияты - Научная библиотека ИГУ'
				description='Научная библиотека ИГУ'
			/>
			{/* Hero */}
			{/* {HeroData.map((data, i) => (
				<Hero
					key={i}
					title={data.title}
					background={data.backGround}
					subTitle={data.subTitle}
					subContent={data.subContent}
					information={data.information}
				/>
			))} */}
			{/* Content */}
			<section className={styles.content}>
				<div className='container'>
					<div className={styles.contentWrapp}>
						<div className={styles.files}>
							{/* <Filefields data={FilesData} /> */}
							<div className={styles.filesBtn}>
								<Button orientation='bottom'>показать больше</Button>
							</div>
						</div>
						<div className={styles.categories}>
							{/* <Category data={ArhivsData} arhivsLink='kyrgyz-language' /> */}
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Arhiv
