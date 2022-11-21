import { Dashboard } from './dashboard/dashboard'
import { NextPage } from 'next'

const DashboardPage: NextPage = () => {
	return <Dashboard />
}

// export const getStaticProps: GetStaticProps = async () => {
// 	try {
// 		const { data: pages } = await pageService.fetchAllPages()
// 		return {
// 			props: {
// 				pages
// 			}
// 		}
// 	} catch (e) {
// 		return {
// 			props: {
// 				pages: [] as IPage[]
// 			}
// 		}
// 	}
// }

export default DashboardPage
