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
		<Layout title='Документация админ панели'>
			<Box color={colors.blueAccent[900]}>
				<Box>
					<Typography>Обновление: 21.12.2022 01:53</Typography>
					<Typography variant='inherit'>
						Обновления коснулись слудующих:
						<ul>
							<li>
								Добавлена возможность удаления подкатегории в Электронной
								библиотеке
							</li>
							<li>
								Исправлено ошибка вывода категорий, в Электронной библиотеке,
								Вестник ИГУ, Труды преподавателей.
							</li>
							<li>
								На данный момент удалены некоторые Пустые подкатегории из
								Электронной библиотеки
							</li>
							<li>Добавлен год издания к Файлам Электронной библиотеки</li>
							<li>Исправлено отображение даты добавления книги</li>
							<li>
								Удалена дата обновления из файлов Вестник ИГУ. Исправлено дата
								отображения
							</li>
							<li>
								Удалена дата обновления из файлов Труды преподавателей.
								Исправлено дата отображения
							</li>
						</ul>
					</Typography>
				</Box>
			</Box>
		</Layout>
	)
}

export default FaqQuestions
