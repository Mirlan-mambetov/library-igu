import { CreateFragment } from '../../../components/Form/CreateFragment/CreateFragment'
import { UpdateFragment } from '../../../components/Form/UpdateFragment/UpdateFragment'
import { Layout } from '../../../components/Layout/Layout'
import { ArrivalImages, ErrorDisplayed } from '../../../components/UI'
import Hero from '../../../components/UI/Hero/Hero'
import { Tabs } from '../../../components/UI/Tabs/Tabs'
import { IPartnersI } from '../../../interfaces/partners.interface'
import { arrivalApi } from '../../../store/api/arrival/arrival.api'
import { pageApi } from '../../../store/api/page/page.api'
import { partnersApi } from '../../../store/api/partners/partners.api'
import { tokens } from '../../../theme'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MdDeleteForever } from 'react-icons/md'

const WebsiteMainPage: NextPage = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const id = 1
	const { data: page, error } = pageApi.useFetchOnePageQuery(id)
	const { data: arrivalImages } = arrivalApi.useFetchAllArrivalImagesQuery(null)
	const { data: partners = [] as IPartnersI[] } =
		partnersApi.useFetchAllPartnersQuery(null)
	const [deletePartnerLink] = partnersApi.useDeletePartnerLinkMutation()
	console.log(page)
	console.log(arrivalImages)
	console.log(partners)
	return (
		<Layout title='Главная страница сайта ИГУ'>
			{/* @ts-ignore */}
			<ErrorDisplayed error={error} />
			{page?.hero.length && <Hero hero={page.hero} />}
			{page?.tabs.length && (
				<Tabs tabs={page.tabs} title='Табы в новых поступлений' />
			)}
			{arrivalImages?.length && <ArrivalImages images={arrivalImages} />}
			{/* Partners */}
			<Box sx={{ my: '20px' }}>
				<Box
					sx={{
						my: '10px',
						display: 'flex',
						gap: '10px',
						alignItems: 'baseline'
					}}
				>
					<Typography variant='h5' color={colors.blueAccent[600]}>
						Партнеры:
					</Typography>
					<CreateFragment fragmentCreate='CreatePartnerLink' />
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: '10px',
						flexWrap: 'wrap',
						my: '20px'
					}}
				>
					{partners &&
						partners.map((partner) => (
							<Box
								key={partner.id}
								sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
							>
								<Link href={`http://${partner.link}`} target='_blank'>
									<Image
										width={270}
										height={50}
										src={`${process.env.NEXT_PUBLIC_APP_STATIC}/${partner.image}`}
										alt={partner.link}
									/>
								</Link>
								<UpdateFragment
									fragmentUpdate='UpdatePartnerLink'
									id={partner.id}
								/>
								<Button
									color='warning'
									onClick={() => deletePartnerLink(partner.id)}
								>
									<MdDeleteForever />
								</Button>
							</Box>
						))}
				</Box>
			</Box>
		</Layout>
	)
}

export default WebsiteMainPage
