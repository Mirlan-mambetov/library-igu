import { HeroInterface } from "../../interfaces/Hero.interface"

export interface HeroProps {
  image?: string
  title: string
  content?: HeroInterface[]
}