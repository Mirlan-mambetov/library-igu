import { CreateFragment } from '../../../components/Form/CreateFragment/CreateFragment'
import { UpdateFragment } from '../../../components/Form/UpdateFragment/UpdateFragment'
import { Layout } from '../../../components/Layout/Layout'
import { internetLinkApi } from '../../../store/api/internetLink/internetLink.api'
import { tokens } from '../../../theme'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { NextPage } from 'next'
import Link from 'next/link'

const WebsiteInternetLinkPage: NextPage = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { data: linkMainCategories } =
		internetLinkApi.useFetchMainLinkCategoriesQuery(null)
	const [deleteCategory] = internetLinkApi.useDeleteLinkMainCategoryMutation()

	return (
		<Layout title='Ссылки интернет'>
			{/* Main categories */}

			<Box
				sx={{ mt: '20px', color: `${colors.blueAccent[600]}`, p: '10px 20px ' }}
			>
				<Typography sx={{ m: '12px 0px' }} variant='h4'>
					Главные категории
				</Typography>
				<CreateFragment fragmentCreate='CreateInternetMainCategory' />
				<Box
					sx={{ display: 'flex', gap: '20px', mt: '40px', flexWrap: 'wrap' }}
				>
					{linkMainCategories ? (
						linkMainCategories.map(mainCategory => (
							<Box
								key={mainCategory.id}
								sx={{
									border: `1px solid ${colors.redAccent[100]}`,
									p: '10px 22px'
								}}
							>
								<Link href={`/website/internet-link/${mainCategory.id}`}>
									<Typography>{mainCategory.name}</Typography>
								</Link>
								<span style={{ fontSize: '10px' }}>
									всего файлов(подкатегорий): {mainCategory.categories.length}
								</span>
								<Box sx={{ mt: '10px', display: 'flex', gap: '4px' }}>
									<UpdateFragment
										fragmentUpdate='UpdateInternetMainCategory'
										id={mainCategory.id}
									/>
									{!mainCategory.categories.length && (
										<Button
											sx={{ fontSize: '10px' }}
											color='warning'
											onClick={() => deleteCategory(mainCategory.id)}
										>
											Удалить
										</Button>
									)}
								</Box>
							</Box>
						))
					) : (
						<span>Нет данных...</span>
					)}
				</Box>
			</Box>
		</Layout>
	)
}

export default WebsiteInternetLinkPage
