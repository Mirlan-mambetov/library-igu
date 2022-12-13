import { FC } from 'react'
import { ParagraphProps } from './Paragraph.props'
import classNames from 'classnames'

// STYLES
import classes from './Paragraph.module.scss'

export const Paragraph: FC<ParagraphProps> = ({ children, line, ...props }) => {
  return (
    <p className={classNames(classes.paragraph, { [classes.line]: line })} {...props}>{children}</p>
  )
}
