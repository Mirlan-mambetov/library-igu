import { Layout } from '../../../components/Layout/Layout'
import { tokens } from '../../../theme'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useTheme } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { NextPage } from 'next'

const FaqQuestions: NextPage = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	return (
		<Layout title='Документация админ панели'>
			<Box color={colors.blueAccent[900]}>
				<Box>
					<Typography
						variant='h5'
						sx={{ my: '20px' }}
						color={colors.blueAccent[500]}
					>
						Продукт: Научная библиотека ИГУ (Иссык-Кульский государственный
						университет)
					</Typography>
					<Box sx={{ my: '10px' }}>
						<Typography variant='subtitle1'>
							Продукт состоит из трех больщих частей.
						</Typography>
						<Typography variant='subtitle2'>
							Это SERVER (API) Обычноый постоянный Порт:localhost:4200/api/v2/
						</Typography>
						<Typography variant='subtitle2'>
							Это DASHBOARD (ADMINISTRATION PANEL CMS) Обычноый постоянный
							Порт:localhost:3100
						</Typography>
						<Typography variant='subtitle2'>
							Это CLIENT (Front end) Обычноый постоянный Порт:localhost:3000
						</Typography>
					</Box>
				</Box>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1bh-content'
						id='panel1bh-header'
					>
						<Typography sx={{ width: '33%', flexShrink: 0 }}>API</Typography>
						<Typography sx={{ color: 'text.secondary' }}>
							Ответы о API (SERVER)
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Box sx={{ displat: 'flex', flexDirection: 'column', gap: '3px' }}>
							<Typography variant='subtitle2'>
								Обратите вниманиe: в данный момент версия API(SERVER): /api/v2.
							</Typography>
							<Typography variant='overline' color={colors.redAccent[300]}>
								изначальная версия /api/v1.
							</Typography>
							<Typography variant='subtitle2'>
								При заключении контракта продукт будет поддерживаться и
								обновляться регулярно. Будут появляться улучшения, качество
								работы всего продукта это SERVER & DASHBOARD & CLIENT
							</Typography>
							<Typography variant='subtitle2'>
								Без поддержки кода, и микросервисов из более чем 100, новых
								фич(улучшений не будет)
							</Typography>
						</Box>
						<Box sx={{ my: '10px' }} color={colors.redAccent[600]}>
							<Typography variant='subtitle1' color={colors.redAccent[200]}>
								Технические характеристики
							</Typography>
							<Typography variant='subtitle1'>
								API написан на NodeJs в связке с TypeScript.
							</Typography>
							<Typography variant='subtitle1'>
								В качестве фреймворка был выбран: NestJs
							</Typography>
							<Typography variant='subtitle1'>
								База данных построена на: Postgres SQL
							</Typography>
						</Box>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1bh-content'
						id='panel1bh-header'
					>
						<Typography sx={{ width: '33%', flexShrink: 0 }}>
							DASHBOARD
						</Typography>
						<Typography sx={{ color: 'text.secondary' }}>
							Ответы о DASHBOARD (ADMINISTRATION PANEL)
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Box sx={{ displat: 'flex', flexDirection: 'column', gap: '3px' }}>
							<Typography variant='subtitle2'>
								Обратите вниманиe: в данный момент версия DASHBOARD
								(ADMINISTRATION PANEL): v2.
							</Typography>
							<Typography variant='overline' color={colors.redAccent[300]}>
								изначальная версия v1.
							</Typography>
							<Typography variant='subtitle2'>
								При заключении контракта продукт будет поддерживаться и
								обновляться регулярно. Будут появляться улучшения, качество
								работы всего продукта это SERVER & DASHBOARD & CLIENT
							</Typography>
							<Typography variant='subtitle2'>
								Без поддержки кода, и микросервисов из более чем 254, новых
								фич(улучшений не будет)
							</Typography>
						</Box>
						<Box sx={{ my: '10px' }} color={colors.redAccent[600]}>
							<Typography variant='subtitle1' color={colors.redAccent[200]}>
								Технические характеристики
							</Typography>
							<Typography variant='subtitle1'>
								DASHBOARD написано на NextJs в связке с TypeScript.
							</Typography>
							<Typography variant='subtitle1'>
								В качестве фреймворка был выбран: NextJs
							</Typography>
							<Typography variant='subtitle1'>
								Стейт менеджмент: ReduxJs @Toolkit
							</Typography>
						</Box>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1bh-content'
						id='panel1bh-header'
					>
						<Typography sx={{ width: '33%', flexShrink: 0 }}>CLIENT</Typography>
						<Typography sx={{ color: 'text.secondary' }}>
							Ответы о CLIENT (Front End)
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Box sx={{ displat: 'flex', flexDirection: 'column', gap: '3px' }}>
							<Typography variant='subtitle2'>
								Обратите вниманиe: в данный момент версия CLIENT (Front End):
								v1.
							</Typography>
							<Typography variant='overline' color={colors.redAccent[300]}>
								изначальная версия v1.
							</Typography>
							<Typography variant='subtitle2'>
								При заключении контракта продукт будет поддерживаться и
								обновляться регулярно. Будут появляться улучшения, качество
								работы всего продукта это SERVER & DASHBOARD & CLIENT
							</Typography>
							<Typography variant='subtitle2'>
								Без поддержки кода, и микросервисов из более чем 158, новых
								фич(улучшений не будет)
							</Typography>
						</Box>
						<Box sx={{ my: '10px' }} color={colors.redAccent[600]}>
							<Typography variant='subtitle1' color={colors.redAccent[200]}>
								Технические характеристики
							</Typography>
							<Typography variant='subtitle1'>
								DASHBOARD написано на NextJs в связке с TypeScript.
							</Typography>
							<Typography variant='subtitle1'>
								В качестве фреймворка был выбран: NextJs
							</Typography>
							<Typography variant='subtitle1'>
								Стейт менеджмент: Redux @Toolkit
							</Typography>
						</Box>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1bh-content'
						id='panel1bh-header'
					>
						<Typography sx={{ width: '33%', flexShrink: 0 }}>
							Бесплатные версии
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography sx={{ width: '33%', flexShrink: 0 }}>
							Из бесплатных версий будет только для DASHBOARD
						</Typography>
						<Typography sx={{ width: '33%', flexShrink: 0 }}>
							Это статистика по линии и по карте Выйдут при следующем
							обновлении. После Beta теста.
						</Typography>
					</AccordionDetails>
				</Accordion>
			</Box>
		</Layout>
	)
}

export default FaqQuestions
