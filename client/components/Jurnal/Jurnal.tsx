import { FC } from 'react'
import { JunralProps } from './Jurnal.props'
import { Paragraph, Tabs, Title } from '../'

// STYLES
import classes from './Jurnal.module.scss'

export const Jurnal: FC<JunralProps> = ({ image, subTitle, text, title, information }): JSX.Element => {
  return (
    <div className={classes.jurnalAbout}>
      <div className={classes.jurnalTitle}>
        <Title type='h3'>{title}</Title>
      </div>
      <div className={classes.jurnalContent}>
        <Title className={classes.jurnalContentTitle} type='h4'>{subTitle}</Title>
        <div className={classes.jurnalWrapp}>
          <Paragraph className={classes.jurnalDescription}>
            {text}
          </Paragraph>
          <div className={classes.junralImage}>
            <img src={image} alt={image} />
          </div>
        </div>
      </div>
      <div className={classes.jurnalInformation}>
        {information?.map(ji => (
          <Tabs tabs={ji} key={ji.id} />
        ))}
      </div>
    </div>
  )
}
