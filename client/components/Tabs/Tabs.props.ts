import { DetailsHTMLAttributes } from "react"
import { TabsInterface } from "../../Interfaces/Tabs.interface"

export interface TabsProps extends DetailsHTMLAttributes<HTMLDivElement> {
  tabs: TabsInterface
}