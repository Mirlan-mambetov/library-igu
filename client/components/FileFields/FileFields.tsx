import { FC } from 'react'
import { FileFieldProps } from './FileFields.props'
import { FileField } from './FileField/FileField'
import classNames from 'classnames'

// STYLES 
import classes from './FileFields.module.scss'

export const FileFields: FC<FileFieldProps> = ({ books, position = 'column' }): JSX.Element => {
  return (
    <div className={classNames(classes.books, { [classes.row]: position === 'row' })}>
      {books.map(book => (
        <FileField {...book} key={book.id} />
      ))}
    </div>
  )
}
