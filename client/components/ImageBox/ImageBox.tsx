import { FC } from 'react'
import { ImageBoxProps } from './ImageBox.props'
import { Title, Paragraph } from '../'

// STYLES
import classes from './ImageBox.module.scss'

export const ImageBox: FC<ImageBoxProps> = ({ content, image }): JSX.Element => {
  return (
    <div className="container">
      <div className={classes.wrapp}>
        <div className={classes.image}>
          <img src={image} alt={content.title} />
        </div>
        <div className={classes.content}>
          <Title className={classes.contentTitle} type='h3'>{content.title}</Title>
          <Title className={classes.contentSubTitle} type='h4'>{content.subtitle}</Title>
          <Paragraph>{content.description}</Paragraph>
        </div>
      </div>
    </div>
  )
}
