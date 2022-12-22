import { Layout } from '../../../Layout/Layout'
import { Category, Filefields, Hero } from '../../../components'
import { IArhivs } from '../../../interfaces/archiv.interface'
import { vestnikService } from '../../../services/vestnikService/vestnik.service'
import { vestnikApi } from '../../../store/api/vestnik/vestnik.api'
import styles from './arhiv.module.scss'
import { GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'
import { FC } from 'react'

interface ICategory {
	archiv: IArhivs
}

const CategoryPage: FC<ICategory> = ({ archiv }) => {
	const { data: archivs = [] as IArhivs[] } =
		vestnikApi.useFetchAllArchivsQuery(null)
	const totalArticle = archiv?.materials.flatMap((m) => m.id).length
	return (
		<Layout>
			<NextSeo
				title='Вестник Иссык-Кульского государственного университета им.К.Тыныстанова - Научная библиотека ИГУ'
				description='Научная библиотека ИГУ'
			/>
			{/* Hero */}

			{archiv && (
				<Hero
					/* @ts-ignore */
					data={{
						title: `Архив ${archiv.name}`,
						infoTitle: 'Всего материалов',
						totalArticle: totalArticle
					}}
				/>
			)}
			{/* Content */}
			<section className={styles.content}>
				<div className='container'>
					<div className={styles.contentWrapp}>
						<div className={styles.files}>
							{archiv && <Filefields id={archiv.id} />}
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
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
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
			} as ICategory,
			notFound: true
		}
	}
}

export default CategoryPage
