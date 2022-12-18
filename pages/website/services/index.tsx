import { UpdateFragment } from '../../../components/Form/UpdateFragment/UpdateFragment'
import { Layout } from '../../../components/Layout/Layout'
import Hero from '../../../components/UI/Hero/Hero'
import { Tabs } from '../../../components/UI/Tabs/Tabs'
import { IImageCard } from '../../../interfaces/imageCard.interface'
import { imageCardApi } from '../../../store/api/imageCard/imageCard.api'
import { pageApi } from '../../../store/api/page/page.api'
import { tokens } from '../../../theme'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { NextPage } from 'next'
import Image from 'next/image'

const WebsiteServicesPage: NextPage = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const id = 3
	const { data: page } = pageApi.useFetchOnePageQuery(id)
	const { data: imageCards = [] as IImageCard[] } =
		imageCardApi.useFetchAllCardsQuery(null)
	console.log(imageCards)
	console.log(page)

	return (
		<Layout title='Страница сервисы'>
			{/* Hero */}
			{page?.hero && <Hero hero={page.hero} />}
			{/* Tabs */}
			{page?.tabs && <Tabs tabs={page.tabs} title='другие сервисы' />}
			{/* Image Cards */}
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '20px',
					my: '40px',
					py: '10px'
				}}
				color={colors.primary[600]}
			>
				{imageCards
					? imageCards.map((card) => (
							<Box
								key={card.id}
								sx={{ display: 'flex', gap: '30px', alignItems: 'center' }}
							>
								<Box>
									<Image
										src={`${process.env.NEXT_PUBLIC_APP_STATIC}/${card.image}`}
										width={300}
										height={150}
										alt={'Image name'}
									/>
								</Box>
								<Box
									sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
								>
									<Typography variant='h5'>Заголовок: {card.title}</Typography>
									<Typography variant='subtitle1'>
										Подзаголовок: {card.subtitle}
									</Typography>
									<Typography variant='subtitle2'>
										Описание: {card.description}
									</Typography>
								</Box>
								<UpdateFragment fragmentUpdate='UpdateImageCard' id={card.id} />
							</Box>
					  ))
					: 'Нет данных'}
			</Box>
		</Layout>
	)
}

export default WebsiteServicesPage
