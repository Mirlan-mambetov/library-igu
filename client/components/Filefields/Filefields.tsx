import { FC } from 'react'
import { File } from './File/File'
import { FilefieldsProps } from './Filefields.props'


// STYLES
import styles from './Filefields.module.scss'

export const Filefields: FC<FilefieldsProps> = ({ data }): JSX.Element => {
  return (
    <div className={styles.files}>
      {data.map(file => (
        <File file={file} key={file.id} />
      ))}
    </div>
  )
}
