import { FC } from 'react'
import { FileFieldProps } from './FileFields.props'
import { FileField } from './FileField/FileField'
import classNames from 'classnames'

// STYLES 
import classes from './FileFields.module.scss'
import Link from 'next/link'
import { Button } from '../Button/Button'

export const FileFields: FC<FileFieldProps> = ({ books, button, position = 'column' }): JSX.Element => {
  return (
    <div className={classNames(classes.books, { [classes.row]: position === 'row' })}>
      {books.map(book => (
        <FileField {...book} key={book.id} />
      ))}
      {
        button &&
        <div className={classes.btn}>
          <Link href={`#`}>
            <a>
              <Button>Показать больше</Button>
            </a>
          </Link>
        </div>
      }
    </div>
  )
}
