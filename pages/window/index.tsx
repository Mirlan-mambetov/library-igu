import { Layout } from '../../Layout/Layout'
import { Hero, TeacherCategories } from '../../components'
import { NextSeo } from 'next-seo'
import { FC } from 'react'

const WindowPage: FC = (): JSX.Element => {
	return (
		<Layout>
			<NextSeo
				title='Единое окно - Научная библиотека ИГУ'
				description='Единое окно Научная библиотека ИГУ'
			/>
			{/* Hero */}
			{/* {HeroData.map((h, i) => (
				<Hero key={i} title={h.title} />
			))} */}
			{/* Categories */}
			<section className='categories'>
				<div className='container'>
					{/* <TeacherCategories category={CategoriesData} categoryLink='window' /> */}
				</div>
			</section>
		</Layout>
	)
}

export default WindowPage
