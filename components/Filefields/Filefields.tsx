import { FC } from 'react'
import { File } from './File/File'
import { FilefieldsProps } from './Filefields.props'
import classNames from 'classnames'


// STYLES
import styles from './Filefields.module.scss'

export const Filefields: FC<FilefieldsProps> = ({ data, orientation = 'column' }): JSX.Element => {
  return (
    <div className={classNames(styles.files, {
      [styles.row]: orientation === 'row',
      [styles.column]: orientation === 'column'
    })}>
      {data.map(file => (
        <File file={file} key={file.id} />
      ))}
    </div>
  )
}
