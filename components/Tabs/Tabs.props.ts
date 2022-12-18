import { ITabs } from '../../interfaces/Tabs.interface'
import { DetailsHTMLAttributes } from 'react'

export interface TabsProps extends DetailsHTMLAttributes<HTMLDivElement> {
	tabs: ITabs
}
