import { FC } from "react"


// STYLES 
import classes from './Footer.module.scss'

export const Footer: FC = (): JSX.Element => {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className={classes.footerColumn}>
          <div className={classes.footerRow}>
            <div className={classes.footerItem}>
              Научная библиотека ИГУ им. К.Тыныстанова
            </div>
            <div className={classes.footerItem}>
              Кыргызская Республика г.Каракол. ул.Абдрахманов 103/722200 (3922) 52180
            </div>
            <div className={classes.footerItem}>
              <a href="mailto:library@rambler.ru" target="_blank">library@rambler.ru</a>
            </div>
            <div className={classes.footerItem}>
              <a href="http://main.iksu.kg" target="_blank">Сайт университета ИГУ</a>
            </div>
          </div>
          <div className={classes.footerRow}>
            <div className={classes.footerItem}>
              Структура
            </div>
            <div className={classes.footerItem}>
              Режим работы: <span>08:00 - 17:00</span>
            </div>
            <div className={classes.footerItem}>
              читальный зал № 1 <span>Тыныстанова 130 1-корпус 233</span>
            </div>
            <div className={classes.footerItem}>
              читальный зал № 2 <span>Тыныстанова 130 1-корпус 233</span>
            </div>
            <div className={classes.footerItem}>
              читальный зал № 3 <span>Тыныстанова 130 1-корпус 233</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
