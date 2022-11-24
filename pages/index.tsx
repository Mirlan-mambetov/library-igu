import { Dashboard } from './dashboard/dashboard'
import { NextPage } from 'next'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import { useContext } from 'react'
import { MyModalContext } from '../contexts/MyModal.context'

const DashboardPage: NextPage = (props) => {
	const { onOpen } = useContext(MyModalContext)

	return (
		<Box
			sx={{
				display: 'flex'
			}}
		>
			<Card sx={{ maxWidth: 345, width: '100%' }}>
				<CardContent sx={{ display: 'flex', gap: '10px' }}>
					<Typography variant='h6'>Количество страниц сайта</Typography>
					{/* <span>{pages?.length}</span> */}
				</CardContent>
				<Button
					color='success'
					sx={{ fontSize: "10px" }}
					onClick={() => onOpen("CreatePage")}
				>
					Создать страницу
				</Button>
			</Card>
		</Box>
	)
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
