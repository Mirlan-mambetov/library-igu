import { Layout } from '../../../components/Layout/Layout'
import { tokens } from '../../../theme'
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { NextPage } from 'next'

const FaqQuestions: NextPage = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	return (
		<Layout title='Информация об обновлении: Продукта'>
			<Box color={colors.blueAccent[900]}>
				<Box>
					<Typography>Обновление: 27.12.2022 00:00</Typography>
					<Typography variant='inherit'>
						Частичное обновление:
						<ul
							style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
						>
							<li>Mодуль 'Единое окно' полностью обновлен</li>
							<li>Реализовано: 'недавние в электронной библиотеке'</li>
							<li style={{ color: `${colors.redAccent[600]}` }}>
								Версия API(server): /api/v3/ будет обновлен в - - - -- : --
								<ul
									style={{
										marginTop: '5px',
										color: `${colors.redAccent[400]}`
									}}
								>
									<li>Включает в себя:</li>
									<li>Авторизацию в админ панель</li>
									<li>
										Страницы: <br />
										Единое окно <br />
										Кыргыз-тили <br />
										Ссылки интернет <br />
									</li>
									<li>
										Поисковики по сайту: <br />
										Вестник: <br />
										Труды преподавателей <br />
										Электронная библиотека <br />
										<span style={{ fontSize: '12px' }}>
											Примечание: по админ панели поисковики не будут
											реализованы. <br />
											Вид поиска на панели останется для будущих реализаций
										</span>
									</li>
								</ul>
							</li>
							<li style={{ color: `${colors.redAccent[600]}` }}>
								Версия API(server): /api/v4/ будет обновлен в - - - -- : --
								<ul
									style={{
										marginTop: '5px',
										color: `${colors.redAccent[400]}`
									}}
								>
									<li>
										Пользователи: <br />
										Будет возможность создавать пользователя в Электронной
										библиотеке
										<br />
										Администрация будет разделена на (Администратора |
										модератора)
									</li>
								</ul>
							</li>
						</ul>
					</Typography>
				</Box>
			</Box>
		</Layout>
	)
}

export default FaqQuestions
