import { UpdateFragment } from '../../../components/Form/UpdateFragment/UpdateFragment'
import { Layout } from '../../../components/Layout/Layout'
import { ErrorDisplayed } from '../../../components/UI'
import Hero from '../../../components/UI/Hero/Hero'
import {
	IAboutInfo,
	IAboutOwner,
	IAboutTablo
} from '../../../interfaces/about.inteface'
import { aboutApi } from '../../../store/api/about/about.api'
import { pageApi } from '../../../store/api/page/page.api'
import { tokens } from '../../../theme'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { NextPage } from 'next'
import Image from 'next/image'

const WebsiteAboutPage: NextPage = () => {
	const id = 33
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const { data: page, error } = pageApi.useFetchOnePageQuery(id)
	const { data: aboutInfo = [] as IAboutInfo[], error: aboutInfoError } =
		aboutApi.useFetchAboutInfoQuery(null)
	const { data: aboutOwner = [] as IAboutOwner[] } =
		aboutApi.useFetchAboutOwnerQuery(null)
	const { data: aboutTablo = [] as IAboutTablo[] } =
		aboutApi.useFetchAboutTabloQuery(null)
	console.log(aboutInfo)
	console.log(aboutOwner)
	console.log(aboutTablo)
	return (
		<Layout title='Страница О библиотеке'>
			{/* @ts-ignore */}
			<ErrorDisplayed error={error || aboutInfoError} />
			{page?.hero && <Hero hero={page.hero} />}
			{/* about info */}
			<Box sx={{ my: '20px' }} color={colors.grey[600]}>
				<Typography variant='h4'>Информация о библиотеке</Typography>
				{aboutInfo.map((info) => (
					<Box
						key={info.id}
						sx={{
							my: '10px',
							display: 'flex',
							gap: '10px',
							alignItems: 'center',
							justifyContent: 'space-between',
							border: `1px solid ${colors.greenAccent[200]}`,
							p: '10px'
						}}
					>
						<Box sx={{ maxWidth: '60%' }}>
							<Typography variant='h5' color={colors.blueAccent[900]}>
								{info.id} - {info.title}
							</Typography>
							<p>{info.description}</p>
						</Box>
						{info.image && (
							<Image
								width={270}
								height={90}
								src={`${process.env.NEXT_PUBLIC_APP_STATIC}/${info.image}`}
								alt='image'
							/>
						)}
						<UpdateFragment fragmentUpdate='UpdateAboutInfo' id={info.id} />
					</Box>
				))}
			</Box>
			{/* About owner */}
			<Box color={colors.blueAccent[900]}>
				<Typography variant='h4' sx={{ mb: '20px' }}>
					Директор
				</Typography>
				{aboutOwner.map((owner) => (
					<Box
						key={owner.id}
						sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}
					>
						<Image
							width={240}
							height={120}
							src={`${process.env.NEXT_PUBLIC_APP_STATIC}/${owner.image}`}
							alt={owner.name}
						/>
						<Box>
							<Typography variant='h6'>Имя: {owner.name}</Typography>
							<Typography variant='h6'>E-mail: {owner.email}</Typography>
							<Typography variant='h6'>Телефон: {owner.phone}</Typography>
						</Box>
						<UpdateFragment fragmentUpdate='UpdateAboutOwner' id={owner.id} />
					</Box>
				))}
			</Box>
			<Box sx={{ my: '20px' }} color={colors.blueAccent[600]}>
				<Typography variant='h4'>Информация о структуре</Typography>
				<Box
					sx={{ my: '20px', display: 'flex', justifyContent: 'space-around' }}
				>
					{aboutTablo.map((tablo) => (
						<Box
							key={tablo.id}
							sx={{
								display: 'flex',
								gap: '8px',
								flexDirection: 'column',
								alignItems: 'baseline'
							}}
						>
							<Typography variant='h5'>{tablo.ceils}</Typography>
							<Typography variant='h6'>{tablo.description}</Typography>
							<UpdateFragment fragmentUpdate='UpdateAboutTablo' id={tablo.id} />
						</Box>
					))}
				</Box>
			</Box>
		</Layout>
	)
}
export default WebsiteAboutPage
