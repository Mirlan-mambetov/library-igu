import { FC } from 'react'
import { TextboxProps } from './Textbox.props'
import { Paragraph, Title } from '../../'
import classNames from 'classnames'


// STYLES
import styles from './Textbox.module.scss'

export const Textbox: FC<TextboxProps> = ({ data }): JSX.Element => {
  return (
    <>
      <div className={classNames(styles.textBox, { [styles.column]: data.image })}>
        {data.title && <Title type='h3'>{data.title}</Title>}
        <div className={styles.textBoxDescription}>
          <Paragraph line>
            {data.description}
          </Paragraph>
        </div>
        {
          data.image
          &&
          <div className={styles.textBoxImage}>
            <img src={data.image} alt={data.title ? data.title : data.image} />
          </div>
        }
      </div>
    </>
  )
}
