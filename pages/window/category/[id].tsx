import { Layout } from '../../../Layout/Layout'
import { Hero, Tabs, Title } from '../../../components'
import { IWindow, IWindowCategory } from '../../../interfaces/window.interface'
import { windowService } from '../../../services/window/windowService'
import styles from '../window.module.scss'
import { GetServerSideProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

interface IWindowCategoryPage {
	categories: IWindowCategory[]
	mainCategory: IWindow
}

const WindowCategoryPage: NextPage<IWindowCategoryPage> = ({
	categories,
	mainCategory
}) => {
	const { query } = useRouter()
	if (!query.id) return null

	return (
		<Layout>
			<NextSeo
				title={`${
					mainCategory ? mainCategory.name : 'Единое окно'
				} - Научная библиотека ИГУ`}
				description='Единое окно Научная библиотека ИГУ'
			/>
			{/* Hero */}
			<Hero
				// @ts-ignore
				data={{
					title: `${mainCategory?.name}`
				}}
			/>
			{/* Files (PDF) */}
			<section className='files'>
				<div className='container'>
					<div className={styles.categories}>
						{categories.map((category) => (
							<div key={category.id} className={styles.category}>
								<a
									href={`${process.env.NEXT_PUBLIC_APP_STATIC}${category.file}`}
									target='_blank'
									rel='noreferrer'
								>
									<div>
										<Title type='h4'>{category.name}</Title>
									</div>
									{category.file ? (
										<span
											style={{
												fontSize: '10px',
												marginTop: '10px',
												textTransform: 'uppercase',
												display: 'block'
											}}
										>
											Файл PDF
										</span>
									) : (
										''
									)}
								</a>
							</div>
						))}
					</div>
				</div>
			</section>
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	try {
		const { data: categories } = await windowService.getCategoriesById(
			// @ts-ignore
			params.id
		)
		const { data: mainCategory } = await windowService.getMainCategoryById(
			// @ts-ignore
			+params?.id
		)
		return {
			props: {
				categories,
				mainCategory
			}
		}
	} catch (e) {
		return {
			props: {
				categories: [] as IWindowCategory[],
				mainCategory: {} as IWindow
			} as IWindowCategoryPage,
			notFound: true
		}
	}
}

export default WindowCategoryPage
