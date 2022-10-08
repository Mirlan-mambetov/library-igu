import { FC } from 'react'
import { ImageCardProps } from './ImageCard.props'

// STYLES
import classes from './ImageCard.module.scss'

export const ImageCard: FC<ImageCardProps> = ({ image }): JSX.Element => {
  return (
    <div className={classes.cardImage} style={{ backgroundImage: `url(${image})` }}></div>
  )
}
