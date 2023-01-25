import { vestnikApi } from '../../../store/api/vestnik/vestnik.api'
import { downloadFiles } from '../../../utils/dowloadFiles'
import { formatDate } from '../../../utils/formatDate.utils'
import { Title } from '../../Title/Title'
// STYLES
import styles from './File.module.scss'
import { FileProps } from './File.props'
import { FC } from 'react'

export const File: FC<FileProps> = ({ file }) => {
	const [updateViews] = vestnikApi.useUpdateMaterialViewsMutation()
	const updateView = () => {
		updateViews(file.id)
	}
	return (
		<div className={styles.file}>
			<div className={styles.fileText}>
				<Title type='h4' className={styles.authors}>
					{file.authors}
				</Title>
				<Title type='h4' className={styles.name}>
					{file.name}
				</Title>
				<div className={styles.description} title={file.description}>
					{file.description}
				</div>
			</div>
			<div className={styles.info}>
				<div className={styles.infoItem}>
					{/* <span>Скачано: {file.downloaded}</span> */}
					<span>Скачано: {file.views}</span>
				</div>
				<div className={styles.infoItem}>
					<span>Просмотров: {file.views}</span>
				</div>
				<div className={styles.infoItem}>
					<span>Категория: {file.category.name}</span>
				</div>
				<div className={styles.infoItem}>
					<a href={`#`} download={`${file.file}`}>
						<svg
							width='15'
							height='16'
							viewBox='0 0 15 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M7.37366 11.5384C7.38867 11.5587 7.40784 11.5752 7.42973 11.5865C7.45162 11.5979 7.47565 11.6038 7.5 11.6038C7.52435 11.6038 7.54838 11.5979 7.57027 11.5865C7.59216 11.5752 7.61133 11.5587 7.62634 11.5384L9.87233 8.51919C9.95455 8.40839 9.88035 8.24433 9.74599 8.24433H8.26003V1.0341C8.26003 0.940352 8.18783 0.863647 8.0996 0.863647H6.89639C6.80816 0.863647 6.73596 0.940352 6.73596 1.0341V8.2422H5.25401C5.11965 8.2422 5.04545 8.40626 5.12767 8.51706L7.37366 11.5384ZM14.8396 10.7926H13.6364C13.5481 10.7926 13.4759 10.8693 13.4759 10.9631V14.2443H1.52406V10.9631C1.52406 10.8693 1.45187 10.7926 1.36364 10.7926H0.160428C0.0721925 10.7926 0 10.8693 0 10.9631V15.1818C0 15.559 0.286765 15.8636 0.641711 15.8636H14.3583C14.7132 15.8636 15 15.559 15 15.1818V10.9631C15 10.8693 14.9278 10.7926 14.8396 10.7926Z'
								fill='#699BF7'
							/>
						</svg>
					</a>
				</div>
				<div className={styles.infoItem}>
					<a
						href={`${process.env.NEXT_PUBLIC_APP_STATIC}${file.file}`}
						target='_blank'
						title='Просмотреть'
						rel='noreferrer'
						onClick={updateView}
					>
						<span>Просмотр</span>
					</a>
				</div>
			</div>
			<div className={styles.published}>
				<span>{formatDate(file.createdAt)}</span>
			</div>
		</div>
	)
}
