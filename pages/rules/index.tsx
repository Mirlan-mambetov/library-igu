import { Layout } from '../../Layout/Layout'
import { Hero, Title, Tabs } from '../../components'
import classes from './rules.module.scss'
import { NextSeo } from 'next-seo'
import { FC } from 'react'

const Rules: FC = (): JSX.Element => {
	return (
		<Layout>
			{/* SEO */}
			<NextSeo
				title='Правила пользования - Научная библиотека ИГУ'
				description='Научная библиотека ИГУ Правила пользования'
			/>
			{/* Hero section */}
			{/* <Hero title='Правила пользования' /> */}
			{/* Rules */}
			<div className='container'>
				{/* {rulesData.map((rules) => (
					<div className={classes.rules} key={rules.id}>
						<Title type='h3' className={classes.rulesTitle}>
							{rules.title}
						</Title>
						<div className={classes.rulesItems}>
							{rules.items.map((r) => (
								<Tabs tabs={r} key={r.id} />
							))}
						</div>
						<div className={classes.rulesAuthor}>
							С уважением директор Научной библиотеки
							<span>{rules.author}</span>
						</div>
					</div>
				))} */}
			</div>
		</Layout>
	)
}

export default Rules
