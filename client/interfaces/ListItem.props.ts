import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

export interface ListItemGroupProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  href?: string
  children: ReactNode
  icon?: boolean
}