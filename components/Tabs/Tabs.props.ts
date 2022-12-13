import { TabsInterface } from '../../interfaces/tabs.interface'
import { DetailsHTMLAttributes } from 'react'

export interface TabsProps extends DetailsHTMLAttributes<HTMLDivElement> {
	tabs: TabsInterface
}
