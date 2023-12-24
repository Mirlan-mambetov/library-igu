import { PdfViewContext } from '../../../contexts/Pdf-view.context'
import { ITeachersWorks } from '../../../interfaces/teachers.interface'
import { teachersApi } from '../../../store/api/teachers/teachers.api'
import { boardCopy } from '../../../utils/clickboard'
import { downloadFiles } from '../../../utils/dowloadFiles'
import { formatDate } from '../../../utils/formatDate.utils'
import { ClipboardComponent } from '../../Clipboard/Clipboard'
import { Title } from '../../Title/Title'
import styles from './TeachersFiles.module.scss'
import { FC, useContext } from 'react'

export const TeachersFiles: FC<ITeachersWorks> = ({
  id,
  authors,
  name,
  category,
  createdAt,
  description,
  downloaded,
  file,
  views
}) => {
  const [updateViews] = teachersApi.useUpdateViewsMutation()
  const [updateDownload] = teachersApi.useUpdateDownloadMutation()
  const { handlerOpen } = useContext(PdfViewContext)

  return (
    <div className={styles.file}>
      <div className={styles.fileText}>
        <Title type="h4" className={styles.authors}>
          {authors}
        </Title>
        <Title type="h4" className={styles.name}>
          {name}
        </Title>
        <div className={styles.title}>{description}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoItem}>
          <span>Скачано: {downloaded}</span>
        </div>
        <div className={styles.infoItem}>
          <span>Просмотров: {views}</span>
        </div>
        <div className={styles.infoItem}>
          <span>Категория: {category.name}</span>
        </div>
        <div className={styles.infoItem}>
          <strong
            onClick={() => {
              downloadFiles(`${file}`, file)
              updateDownload(id)
            }}
          >
            Скачать
          </strong>
        </div>
        <div className={styles.infoItem}>
          <strong
            onClick={() => {
              handlerOpen(process.env.NEXT_PUBLIC_APP_STATIC + file)
              updateViews(id)
            }}
          >
            Просмотр
          </strong>
        </div>
        <div className={styles.infoItem}>
          <ClipboardComponent
            link={process.env.NEXT_PUBLIC_APP_STATIC + file}
          />
        </div>
      </div>
      <div className={styles.published}>
        <span>Опубликован: {formatDate(createdAt)}</span>
      </div>
    </div>
  )
}
