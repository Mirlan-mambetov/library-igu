import { DelHTMLAttributes, ReactNode } from "react"

export interface ParagraphProps extends DelHTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
  line?: boolean
}