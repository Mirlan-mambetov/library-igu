import { DelHTMLAttributes, ReactNode } from "react";
import { TabsInterface } from "../../interfaces/Tabs.interface";

export interface TabsProps extends DelHTMLAttributes<HTMLDivElement> {
  tabs: TabsInterface[]
  title: string
}