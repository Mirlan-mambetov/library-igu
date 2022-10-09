import { DetailsHTMLAttributes } from "react"
import { TabsInterface } from "../../interfaces/Tabs.interface"

export interface TabsProps extends DetailsHTMLAttributes<HTMLDivElement> {
  tabs: TabsInterface
}