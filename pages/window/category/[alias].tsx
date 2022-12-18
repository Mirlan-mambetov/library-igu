import { Layout } from '../../../Layout/Layout'
import { Hero, Tabs } from '../../../components'
import { NextSeo } from 'next-seo'
import { FC } from 'react'

const CategoryPage: FC = (): JSX.Element => {
	return (
		<Layout>
			<NextSeo
				title='Единое окно - Научная библиотека ИГУ'
				description='Единое окно Научная библиотека ИГУ'
			/>
			{/* Hero */}
			{/* {HeroData.map((h, i) => (
				<Hero
					key={i}
					title={h.title}
					subContent={h.subContent}
					subTitle={h.subTitle}
					subContentOrientation='row'
				/>
			))} */}
			{/* Files (PDF) */}
			<section className='files'>
				<div className='container'>
					{/* {FilesData.map((file) => (
						<Tabs tabs={file} key={file.id} />
					))} */}
				</div>
			</section>
		</Layout>
	)
}

export default CategoryPage
