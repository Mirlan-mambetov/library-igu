import { FC } from "react"
import { TitleProps } from "./Title.props"
import classNames from "classnames"

// STYLES
import classes from './Title.module.scss'

export const Title: FC<TitleProps> = ({ children, type, className, ...props }): JSX.Element => {
  switch (type) {
    case 'h1':
      return <h1 {...props} className={classNames(classes.h1, className)}>{children}</h1>
    case 'h3':
      return <h3 {...props} className={classNames(classes.h3, className)}>{children}</h3>
    case 'h4':
      return <h4 {...props} className={classNames(classes.h4, className)}>{children}</h4>
    default:
      return <h1 {...props} className={classNames(classes.h1, className)}>{children}</h1>
  }
}
