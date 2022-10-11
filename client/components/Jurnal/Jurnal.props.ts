import { TabsInterface } from "../../interfaces/Tabs.interface"

export interface JurnalProps {
  title: string
  subTitle: string
  text: string
  image: string
  information?: TabsInterface[]
}
export interface JurnalAboutI {
  title: string
  text: string
  image?: string
}