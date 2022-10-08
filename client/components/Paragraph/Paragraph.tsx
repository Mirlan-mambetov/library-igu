import { FC } from 'react'
import { ParagraphProps } from './Paragraph.props'

export const Paragraph: FC<ParagraphProps> = ({ children, ...props }) => {
  return (
    <p {...props}>{children}</p>
  )
}
