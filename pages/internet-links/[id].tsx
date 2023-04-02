import { GetServerSideProps, GetStaticPaths, NextPage } from 'next'
import { Layout } from '../../Layout/Layout'
import { internetLinkService } from '../../services/internet-links/internet-links-sevice'
import {
	IInternetLink,
	IInternetLinkCategory
} from '../../interfaces/Internet-link-interface'
import { NextSeo } from 'next-seo'
import { EmptyItems, Hero, Paragraph, Title } from '../../components'
import styles from './internet-links.module.scss'

interface IInternetLinkProps {
	links: IInternetLink[]
	category: IInternetLinkCategory
}
const InternetLink: NextPage<IInternetLinkProps> = ({ links, category }) => {
	return (
		<Layout>
			<NextSeo
				title={`Ссылки интернет ${
					category ? category.name : ''
				}- Научная библиотека ИГУ`}
				description='Ссылки интернет, университет им.К.Тыныстанова, иссык-куль'
			/>
			{/* Hero */}
			{category ? (
				<Hero
					// @ts-ignore
					data={{
						title: category.name,
						infoTitle: 'Всего ссылок',
						totalArticle: category?.categories?.length
					}}
				/>
			) : (
				<EmptyItems />
			)}
			<div className='container'>
				<div className={styles.link_wrapp}>
					{links ? (
						links.map(link => (
							<div key={link.id} className={styles.link}>
								<a target='_blank' rel='noreferrer' href={link.link}>
									{link.name}
									<Paragraph>{link.description}</Paragraph>
									<span>переходов: {link.transitions}</span>
								</a>
							</div>
						))
					) : (
						<EmptyItems />
					)}
				</div>
			</div>
		</Layout>
	)
}

export default InternetLink

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	try {
		if (!params) {
			return {
				notFound: true
			}
		}
		const { data: links } = await internetLinkService.findLinksByCategory(
			Number(params.id)
		)
		const { data: category } = await internetLinkService.findCategoryById(
			Number(params.id)
		)
		return {
			props: {
				links,
				category
			}
		}
	} catch (err) {
		return {
			props: {
				links: [] as IInternetLink[],
				category: {} as IInternetLinkCategory
			},
			notFound: true
		}
	}
}
