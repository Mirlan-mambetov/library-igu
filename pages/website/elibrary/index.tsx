import { CreateFragment } from '../../../components/Form/CreateFragment/CreateFragment'
import { UpdateFragment } from '../../../components/Form/UpdateFragment/UpdateFragment'
import { Layout } from '../../../components/Layout/Layout'
import Elibrary from '../../../components/UI/Elibrary/Elibrary'
import Hero from '../../../components/UI/Hero/Hero'
import { IElibrary } from '../../../interfaces/elibrary.interface'
import { elibraryApi } from '../../../store/api/elibrary/elibrary.api'
import { pageApi } from '../../../store/api/page/page.api'
import { tokens } from '../../../theme'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { NextPage } from 'next'
import Image from 'next/image'

const WebsiteElibraryPage: NextPage = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const id = 6
	const { data: page } = pageApi.useFetchOnePageQuery(id)
	const { data: mainCategories = [] as IElibrary[] } =
		elibraryApi.useFetchCategoriesQuery(null)

	const { data: remaining } = elibraryApi.useFetchElibraryRemainingsQuery(null)

	return (
		<Layout title='Электронная библиотека'>
			{/* Hero */}
			{page?.hero && <Hero hero={page.hero} />}
			{/* Caegories */}
			{mainCategories && <Elibrary data={mainCategories} />}
			{/* Remainings */}
			<Box sx={{ my: '20px', color: `${colors.grey[900]}` }}>
				<Typography variant='h4'>Недавние:</Typography>
				<Box sx={{ my: '20px' }}>
					{remaining && remaining.length > 5 ? (
						'Невозоможно создать, так как ограничено создание блоков (6)'
					) : (
						<CreateFragment fragmentCreate='CreateElibraryRemaining' />
					)}
				</Box>
				<Box
					sx={{
						display: 'flex',
						gap: '20px',
						alignItems: 'center',
						pt: '20px'
					}}
				>
					{remaining &&
						remaining.map((remain) => (
							<Box
								key={remain.id}
								sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
							>
								<Image
									width={150}
									height={240}
									src={`${process.env.NEXT_PUBLIC_APP_STATIC}/${remain.image}`}
									alt={remain.createdAt}
								/>
								<Box>
									<UpdateFragment
										fragmentUpdate='UpdateElibraryRemaining'
										id={remain.id}
									/>
								</Box>
							</Box>
						))}
				</Box>
			</Box>
		</Layout>
	)
}

export default WebsiteElibraryPage
