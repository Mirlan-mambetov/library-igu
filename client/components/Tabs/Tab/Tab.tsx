import Link from 'next/link'
import { FC } from 'react'
import { TabsInterface } from '../../../interfaces/Tabs.interface'


// STYLES
import classes from './Tab.module.scss'

export const Tab: FC<TabsInterface> = ({ description, link, name }): JSX.Element => {
  return (
    <div className={classes.tabsContent}>
      {
        link ?
          <Link href={`${link}`}>
            <a>{name}</a>
          </Link>
          :
          description
      }
    </div>
  )
}
