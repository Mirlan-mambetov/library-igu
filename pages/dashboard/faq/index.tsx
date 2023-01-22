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
					<Typography>Обновление: 22.01.2023 18:51</Typography>
					<Typography variant='inherit'>
						Частичное обновление:
						<ul
							style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
						>
							<li>Исправлен внешний вид в ссылки интернет</li>
							<li style={{ color: `${colors.redAccent[600]}` }}>
								В связи с большим весом, и утечек памяти с библиотекой Material
								UI. <br /> Вся админ панель будет перписано в Сhakra UI.
								<ul style={{ color: `${colors.redAccent[300]}`, width: '60%' }}>
									<li>
										Chakra UI - это простая, модульная и доступная библиотека
										компонентов, которая предоставляет строительные блоки,
										необходимые для создания приложений React.
										<br />
										<a
											style={{
												color: `${colors.redAccent[500]}`,
												textDecoration: 'underline'
											}}
											target='_blank'
											href='https://chakra-ui.com/'
										>
											Chakra UI
										</a>
									</li>
									<li>
										<a
											style={{
												color: `${colors.redAccent[500]}`,
												textDecoration: 'underline'
											}}
											target='_blank'
											href='https://mui.com/'
										>
											MUI
										</a>
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
