import { HeroInterface } from "../../interfaces/Hero.interface"

export interface HeroProps {
  image?: string
  title: string
  subTitle?: string
  content?: HeroInterface[]
  button?: {
    name: string
  }
  arhivInfo?: number
}