import { FC } from 'react'
import { ParagraphIterface } from '../../interfaces/Paragraph.interface'
import { Paragraph } from '../Paragraph/Paragraph'
import { Title } from '../Title/Title'
import classNames from 'classnames'

// STYLES 
import classes from './TextBox.module.scss'

export const TextBox: FC<ParagraphIterface> = ({ paragraph, image, title }): JSX.Element => {
  return (
    <div className={classes.wrapp}>
      <div className={classNames(classes.content, { [classes.contentLow]: title, [classes.contentFill]: !title })}>
        {
          title ?
            <Title type='h3'>{title}</Title>
            :
            ''
        }
        <Paragraph line>{paragraph}</Paragraph>
      </div>
      {
        image ?
          <div className={classes.image}>
            <img src={image} alt={title ? title : ''} />
          </div>
          :
          ''
      }
    </div>
  )
}
