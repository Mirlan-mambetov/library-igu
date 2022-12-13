import {
	AboutInformationI,
	AboutTextContentI,
	OwnerI
} from '../../Interfaces/About.interface'
import { withLayout } from '../../Layout/WithLayout'
import { Hero, Tabs } from '../../components'
import { Owner } from '../../components/About/Owner/Owner'
import { Textbox } from '../../components/About/Textbox/Textbox'
import { TabsInterface } from '../../interfaces/tabs.interface'
// STYLES
import styles from './About.module.scss'
import { NextSeo } from 'next-seo'
import { FC } from 'react'

const About: FC = (): JSX.Element => {
	// History
	const TextboxData: AboutTextContentI[] = [
		{
			id: 1,
			description:
				'Научная библиотека была создана в 1940 году на базе книжного фонда учительского института и имела фонд  экземпляров изданий. Штат библиотеки состоял из 5 работников. За время существования Научная библиотека выросла в крупный научно-информационный центр, с фондом 431507 экземпляров изданий, распределенной по абонементу и трем читальным залам. ',
			title: 'немного об истории'
		},
		{
			id: 2,
			description:
				'Основная задача Научной библиотеки - удовлетворять потребности пользователя в информации, делать ее доступной, полной и оперативной.'
		},
		{
			id: 3,
			description:
				'Научная библиотека ИГУ имени Касыма Тыныcтанова –  это информационно - деловой центр университета, ее цель - обеспечить доступ к знаниям в процессе обучения, качественное и оперативное обслуживание пользователей.',
			title: 'задачи'
		},
		{
			id: 4,
			description:
				'Университетская библиотека сегодня все чаще ассоцируется с понятиями интеллект, знания и профессионализм. Здесь накапливаются и систематизируются все возможные виды информации и обеспечивается современный уровень информационной поддержки процессов образования и научно-исследовательской деятельности. На ведущее место выходит задача предоставления  профессорско-преподавательскому составу и будущим специалистам (студентам, магистрантам, аспирантам) свободного и неограниченного доступа ко всей нужной им информации независимо от ее наличия в библиотечном фонде. Среди актуальных направлений деятельности Научной библиотеки ИГУ – поддержка и продвижение библиотечного веб-сайта, использование в учебном и научно-исследовательском процессах электронных ресурсов удаленного доступа, развитие онлайновых услуг на основе собственных документных фондов, формирование информационной культуры пользователей.',
			title: 'инофрмация'
		},
		{
			id: 5,
			description:
				'Библиотека стремится к тому, чтобы создать все условия для плодотворной учебы студентов, для научной деятельности преподавателей, для максимального удовлетворения информационных запросов и развития широких интересов пользователей.',
			image:
				'https://res.cloudinary.com/djzubalr7/image/upload/v1665331529/Library-igu/IMG_7529-1200x600_1_b3k6v6.png'
		}
	]
	// Owner
	const OwnerData: OwnerI[] = [
		{
			id: 1,
			email: 'igulibrary@rambler.ru',
			image:
				'https://res.cloudinary.com/djzubalr7/image/upload/v1665333551/Library-igu/new_1_p0pz1m.png',
			name: 'Кадырова Эркингуль Касымовна',
			phone: '(03922)5-21-80'
		}
	]
	// Information
	const informtaionData: AboutInformationI[] = [
		{ id: 1, ceils: 431507, description: 'книг' },
		{ id: 2, ceils: 8, description: 'сотрудников' },
		{ id: 3, ceils: 3, description: 'зала' }
	]
	// Tabs data
	const TabsData: TabsInterface[] = [
		{
			id: 1,
			title: 'правила пользования',
			isLink: [
				{
					id: 1,
					name: 'Вы можете ознакомится правилами пользования',
					link: '/rules'
				}
			]
		},
		{
			id: 2,
			title: 'фонд библиотеки',
			isLink: [
				{
					id: 1,
					name: 'Книжный фонд - PDF',
					link: 'http://nbisu.moy.su/_ld/36/3654_IGUKOYLUBAEV201.pdf'
				},
				{
					id: 2,
					name: 'Подписка на периодические издания (2019 год) - PDF',
					link: 'http://nbisu.moy.su/_ld/36/3654_IGUKOYLUBAEV201.pdf'
				}
			]
		}
	]
	return (
		<>
			<NextSeo
				title='О библиотеке - Научная библиотека ИГУ'
				description='О библиотеке Научная библиотека ИГУ'
			/>
			{/* Hero */}
			<Hero
				title='О библиотеке'
				background='https://res.cloudinary.com/djzubalr7/image/upload/v1665329375/Library-igu/about-bg_bnwqj3.png'
			/>
			<div className='container'>
				{/* History (Text box component in aboutComponent) */}
				<div className={styles.history}>
					{TextboxData.map((text) => (
						<Textbox data={text} key={text.id} />
					))}
				</div>
				{/* Owner */}
				{OwnerData.map((owner) => (
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
						{informtaionData.map((i) => (
							<div className={styles.infoItem} key={i.id}>
								<span>{i.ceils} +</span>
								{i.description}
							</div>
						))}
					</div>
				</div>
			</section>
			<section className={styles.links}>
				<div className='container'>
					<div className={styles.link}>
						{TabsData.map((tabs) => (
							<Tabs tabs={tabs} key={tabs.id} />
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default withLayout(About)
