import { Layout } from '../../../Layout/Layout'
import { Category, Filefields, Hero } from '../../../components'
import { IArhivs } from '../../../interfaces/archiv.interface'
import { vestnikService } from '../../../services/vestnikService/vestnik.service'
import { vestnikApi } from '../../../store/api/vestnik/vestnik.api'
// STYLES
import styles from './arhiv.module.scss'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { FC } from 'react'

interface ICategory {
	archiv: IArhivs
}

const CategoryPage: FC<ICategory> = ({ archiv }) => {
	const { data: archivs = [] as IArhivs[] } =
		vestnikApi.useFetchAllArchivsQuery(null)
	const totalArticle = archiv.materials.flatMap((m) => m.id).length
	return (
		<Layout>
			<NextSeo
				title='Вестник Иссык-Кульского государственного университета им.К.Тыныстанова - Научная библиотека ИГУ'
				description='Научная библиотека ИГУ'
			/>
			{/* Hero */}

			<Hero
				/* @ts-ignore */
				data={{
					title: `Архив ${archiv.name}`,
					infoTitle: 'Всего материалов',
					totalArticle: totalArticle
				}}
			/>
			{/* Content */}
			<section className={styles.content}>
				<div className='container'>
					<div className={styles.contentWrapp}>
						<div className={styles.files}>
							<Filefields id={archiv.id} />
						</div>
						<div className={styles.categories}>
							{archiv && <Category data={archivs} arhivsLink='vestnik' />}
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: archivs } = await vestnikService.getAllArchivs()
		const paths = archivs.map((archiv) => ({
			params: { id: String(archiv.id) }
		}))
		return {
			paths,
			fallback: false
		}
	} catch (e) {
		return {
			paths: [],
			fallback: false
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		// @ts-ignore
		const { data: archiv } = await vestnikService.getArchivById(+params.id)
		return {
			props: {
				archiv
			}
		}
	} catch (e) {
		return {
			props: {
				archiv: {} as IArhivs
			} as ICategory
		}
	}
}

export default CategoryPage
