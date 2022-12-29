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
					<Typography>Обновление: 30.12.2022 00:00</Typography>
					<Typography variant='inherit'>
						Частичное обновление:
						<ul
							style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
						>
							<li>Доступен модуль Ссылки интернет</li>
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
