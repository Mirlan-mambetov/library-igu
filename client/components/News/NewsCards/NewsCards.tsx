import { FC } from "react"
import { NewsProps } from "../../../interfaces/News.props"
import { Paragraph, Title } from "../../"

// STYLES
import classes from './NewsCards.module.scss'
import Link from "next/link"

export const NewsCards: FC<NewsProps> = ({ id, date, description, image, title }): JSX.Element => {
  return (
    <Link href={`/news/${id}`}>
      <a>
        <div className={classes.cards}>
          <div className={classes.newsDate}>
            <span>{date}</span>
          </div>
          <div className={classes.image}>
            <img src={image} alt={title} />
            <Title className={classes.newsName} type="h4" title={title}>{title}</Title>
          </div>
          <div className={classes.content}>
            <Paragraph className={classes.newsDescription} title={description}>
              {description}
            </Paragraph>
          </div>
        </div>
      </a>
    </Link>
  )
}
