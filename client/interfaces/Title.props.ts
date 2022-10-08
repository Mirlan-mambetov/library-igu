import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

export interface TitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  type: 'h1' | 'h3' | 'h4'
  children: ReactNode
}