import { FC } from 'react'
import { SubContentProps } from './SubContent.props'
import classNames from 'classnames'


// STYLES 
import styles from './SubContent.module.scss'

export const SubContent: FC<SubContentProps> = ({ data, orientation = 'column' }): JSX.Element => {
  return (
    <div className={classNames(styles.subContent, {
      [styles.row]: orientation === 'row',
      [styles.column]: orientation === 'column'
    })}>
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
