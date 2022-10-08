import { FC } from 'react'
import { ImageCard } from './ImageCard/ImageCard'
import { ImageCardsProps } from './ImageCards.props'
import classNames from 'classnames'

// STYLES
import classes from './ImageCards.module.scss'


export const ImageCards: FC<ImageCardsProps> = ({ images, className }): JSX.Element => {
  return (
    <div className={classNames(classes.cards, className)}>
      {images.map(i => (
        <ImageCard key={i.id} image={i.image} />
      ))}
    </div>
  )
}
