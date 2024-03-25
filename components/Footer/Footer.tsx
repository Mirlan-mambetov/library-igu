// STYLES
import { FC } from 'react'
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
              <span>Адрес:</span>
              722200, Кыргызская Республика, г.Каракол, ул.Гебзе 120.
            </div>
            <div className={classes.footerItem}>
              <span>Тел: </span>
              <a href="tel:(3922)52180">(3922) 52180</a>
            </div>
            <div className={classes.footerItem}>
              <span>E-mail</span>
              <a
                href="mailto:library@rambler.ru"
                rel="noreferrer"
                target="_blank"
              >
                igulibrary@rambler.ru
              </a>
            </div>
            <div className={classes.footerItem}>
              <span>Веб сайт университета:</span>
              <a href="http://main.iksu.kg" rel="noreferrer" target="_blank">
                main.iksu.kg
              </a>
            </div>
          </div>
          <div className={classes.footerRow}>
            <div className={classes.footerItem}>Структура библиотеки</div>
            <div className={classes.footerItem}>
              Режим работы: <span>08:00 - 17:00</span>
            </div>
            <div className={classes.footerItem}>
              Абонемент <span>3 корпус, 216</span>
            </div>

            <div className={classes.footerItem}>
              Читальный зал № 1 <span>1 корпус, 217</span>
            </div>
            <div className={classes.footerItem}>
              Читальный зал № 2 <span>3 корпус, 218</span>
            </div>
            <div className={classes.footerItem}>
              Читальный зал № 3 <span>4 корпус, 105</span>
            </div>
            <div className={classes.footerItem}>
              Зал электронной документации <span>3 корпус, 109</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
