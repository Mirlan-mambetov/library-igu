import { FC } from 'react'
import { SubContentProps } from './SubContent.props'


// STYLES 
import styles from './SubContent.module.scss'

export const SubContent: FC<SubContentProps> = ({ data }): JSX.Element => {
  return (
    <div className={styles.subContent}>
      {data.map(item => (
        <div className={styles.subItems} key={item.id}>
          <span>{item.title}</span>
          {item.description?.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      ))}
    </div>
  )
}
