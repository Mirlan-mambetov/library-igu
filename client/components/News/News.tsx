import { FC } from 'react'
import { NewsMainProps } from './News.props'
import { NewsCards } from './NewsCards/NewsCards'
import { Button, Title } from '../'


// STYLES
import classes from './News.module.scss'

export const News: FC<NewsMainProps> = ({ news }) => {
  return (
    <div className="container">
      <div className={classes.news}>
        <Title type='h3'>Новости</Title>
        <div className={classes.newsWrapp}>
          {
            news.map(n => (
              <NewsCards {...n} key={n.id} />
            ))
          }
        </div>
      </div>
      <div className="newsBtn">
        <Button orientation='right'>Архив новостей</Button>
      </div>
    </div>
  )
}