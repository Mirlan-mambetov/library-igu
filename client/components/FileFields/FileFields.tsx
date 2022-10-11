import { FC } from 'react'
import { FileFieldProps } from './FileFields.props'

// STYLES 
import classes from './FileFields.module.scss'
import { FileField } from './FileField/FileField'

export const FileFields: FC<FileFieldProps> = ({ books }): JSX.Element => {
  return (
    <div className={classes.books}>
      {books.map(book => (
        <FileField {...book} key={book.id} />
      ))}
    </div>
  )
}
