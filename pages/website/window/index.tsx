import { CreateFragment } from '../../../components/Form/CreateFragment/CreateFragment'
import { UpdateFragment } from '../../../components/Form/UpdateFragment/UpdateFragment'
import { Layout } from '../../../components/Layout/Layout'
import Hero from '../../../components/UI/Hero/Hero'
import { IWindow } from '../../../interfaces/window.interface'
import { pageApi } from '../../../store/api/page/page.api'
import { windowApi } from '../../../store/api/window/window.api'
import { tokens } from '../../../theme'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

const WebsiteWindowPage = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const pageId = 40
	const { data: page } = pageApi.useFetchOnePageQuery(pageId)
	const { data: windowMainCategories = [] as IWindow[] } =
		windowApi.useFetchAllWindowMainCategoriesQuery(null)

	return (
		<Layout title='Единое окно'>
			{/* Hero */}
			{page?.hero && <Hero hero={page.hero} />}

			{/* WINDOW details */}
			<Box
				sx={{ mt: '20px', color: `${colors.blueAccent[600]}`, p: '10px 20px ' }}
			>
				<Typography sx={{ m: '12px 0px' }} variant='h4'>
					Категории eдиного окна
				</Typography>
				<CreateFragment fragmentCreate='CreateWindowMainCategory' />
				<Box sx={{ display: 'flex', gap: '20px', mt: '40px' }}>
					{windowMainCategories ? (
						windowMainCategories.map((mainCategory) => (
							<Box
								key={mainCategory.id}
								sx={{
									border: `1px solid ${colors.redAccent[100]}`,
									p: '10px 22px'
								}}
							>
								<Link href={`/website/window/${mainCategory.id}`}>
									<Typography>{mainCategory.name}</Typography>
								</Link>
								<span style={{ fontSize: '10px' }}>
									всего файлов(подкатегорий): {mainCategory.category.length}
								</span>
								<Box sx={{ mt: '10px' }}>
									<UpdateFragment
										fragmentUpdate='UpdateWindowMainCategory'
										id={mainCategory.id}
									/>
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

export default WebsiteWindowPage
