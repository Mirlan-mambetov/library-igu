import { FC } from 'react'
import { Button, Title } from '../'
import { ArhivsProps } from './Arhivs.props'
import Link from 'next/link'


// STYLES 
import classes from './Arhivs.module.scss'



export const Arhivs: FC<ArhivsProps> = ({ arhivs, totalArhivs, totalMaterials, arhivTitle, arhivLink }): JSX.Element => {
  return (
    <div className={classes.arhivs}>
      <Title type='h3'>{arhivTitle}</Title>
      <div className={classes.arhivsContent} >
        <div className={classes.arhivsInfo}>
          <span>количество архивов:</span>
          <span>{totalArhivs}</span>
        </div>
        <div className={classes.arhivsInfo}>
          <span>материалов в архивах:</span>
          <span>{totalMaterials}</span>
        </div>
        <div className={classes.arhivsWrapp}>
          {arhivs.map(arhiv => (
            <div className={classes.arhivsLinks} key={arhiv.id}>
              <Link href={`/${arhivLink}/arhivs/${arhiv.alias}`}>
                <a>{arhiv.name}</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Button orientation='right'>Показать больше архивов</Button>
    </div>
  )
}
