import { HeroI } from '../../../Interfaces/Hero.interface'
import { withLayout } from '../../../Layout/WithLayout'
import { Hero, Tabs } from '../../../components'
import { TabsInterface } from '../../../interfaces/tabs.interface'
import { NextSeo } from 'next-seo'
import { FC } from 'react'

const CategoryPage: FC = (): JSX.Element => {
	// Hero Data
	const HeroData: HeroI[] = [
		{
			title: 'Единое окно',
			subTitle: 'Преподаватели',
			subContent: [
				{ id: 1, title: 'Задолжности преподавателей' },
				{ id: 2, title: 'Просим закрыть задолжности до 10.11.2022' }
			]
		}
	]
	// Files Data
	const FilesData: TabsInterface[] = [
		{
			id: 1,
			title: 'Физико-математический и естественно-технический факультет',
			isLink: [
				{
					id: 1,
					link: 'http://nbisu.moy.su/_ld/36/3654_IGUKOYLUBAEV201.pdf',
					name: '04.12.21'
				},
				{
					id: 2,
					link: 'http://nbisu.moy.su/_ld/36/3654_IGUKOYLUBAEV201.pdf',
					name: '06.12.21'
				},
				{
					id: 3,
					link: 'http://nbisu.moy.su/_ld/36/3654_IGUKOYLUBAEV201.pdf',
					name: '14.12.21'
				}
			]
		},
		{
			id: 2,
			title: 'Факультет экономики и туризма',
			isLink: [
				{
					id: 1,
					link: 'http://nbisu.moy.su/_ld/36/3654_IGUKOYLUBAEV201.pdf',
					name: '04.12.21'
				},
				{
					id: 2,
					link: 'http://nbisu.moy.su/_ld/36/3654_IGUKOYLUBAEV201.pdf',
					name: '02.12.21'
				}
			]
		},
		{
			id: 3,
			title: 'Колледж',
			isLink: [
				{
					id: 1,
					link: 'http://nbisu.moy.su/_ld/36/3654_IGUKOYLUBAEV201.pdf',
					name: '02.12.21'
				}
			]
		},
		{
			id: 4,
			title: 'Педагогический факультет',
			isLink: [
				{
					id: 1,
					link: 'http://nbisu.moy.su/_ld/36/3654_IGUKOYLUBAEV201.pdf',
					name: '02.12.21'
				},
				{
					id: 2,
					link: 'http://nbisu.moy.su/_ld/36/3654_IGUKOYLUBAEV201.pdf',
					name: '02.12.21'
				},
				{
					id: 3,
					link: 'http://nbisu.moy.su/_ld/36/3654_IGUKOYLUBAEV201.pdf',
					name: '02.12.21'
				}
			]
		}
	]
	return (
		<>
			<NextSeo
				title='Единое окно - Научная библиотека ИГУ'
				description='Единое окно Научная библиотека ИГУ'
			/>
			{/* Hero */}
			{HeroData.map((h, i) => (
				<Hero
					key={i}
					title={h.title}
					subContent={h.subContent}
					subTitle={h.subTitle}
					subContentOrientation='row'
				/>
			))}
			{/* Files (PDF) */}
			<section className='files'>
				<div className='container'>
					{FilesData.map((file) => (
						<Tabs tabs={file} key={file.id} />
					))}
				</div>
			</section>
		</>
	)
}

export default withLayout(CategoryPage)
