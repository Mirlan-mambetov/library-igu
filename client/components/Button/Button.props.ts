import { DelHTMLAttributes, ReactNode } from "react"

export interface ButtonProps extends DelHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  orientation?: 'top' | 'right' | 'bottom'
}