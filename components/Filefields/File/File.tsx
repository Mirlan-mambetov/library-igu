import { PdfViewContext } from '../../../contexts/Pdf-view.context'
import { vestnikApi } from '../../../store/api/vestnik/vestnik.api'
import { downloadFiles } from '../../../utils/dowloadFiles'
import { formatDate } from '../../../utils/formatDate.utils'
import { PdfViewer } from '../../Pdf-viewer/Pdf-viewer'
import { Title } from '../../Title/Title'
import styles from './File.module.scss'
import { FileProps } from './File.props'
import { FC, useContext } from 'react'

export const File: FC<FileProps> = ({ file }) => {
	const { isOpen, handlerOpen } = useContext(PdfViewContext)
	const [updateViews] = vestnikApi.useUpdateMaterialViewsMutation()
	const [updateDownloaded] = vestnikApi.useUpdateMaterialDownloadedMutation()

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
					<span>Скачано: {file.downloaded}</span>
				</div>
				<div className={styles.infoItem}>
					<span>Просмотров: {file.views}</span>
				</div>
				<div className={styles.infoItem}>
					<span>Категория: {file.category.name}</span>
				</div>
				<div className={styles.infoItem}>
					<span
						className={styles.download}
						onClick={() => {
							updateDownloaded(file.id)
							downloadFiles(`${file.file}`, file.file)
						}}
					>
						Скачать
					</span>
				</div>
				<div className={styles.infoItem}>
					<span
						className={styles.download}
						onClick={() => {
							handlerOpen(process.env.NEXT_PUBLIC_APP_STATIC + file.file)
							updateViews(file.id)
						}}
					>
						Просмотр
					</span>
				</div>
				{isOpen && (
					<PdfViewer url={process.env.NEXT_PUBLIC_APP_STATIC + file.file} />
				)}
			</div>
			<div className={styles.published}>
				<span>{formatDate(file.createdAt)}</span>
			</div>
		</div>
	)
}
