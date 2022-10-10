import { NextSeo } from 'next-seo'
import { FC } from 'react'
import { Hero, Title } from '../../components'
import { HeroProps } from '../../components/Hero/Hero.props'
import { VestnikInformationI } from '../../interfaces/Vestnik.interface'
import { withLayout } from '../../Layout/WithLayout'

// STYLES
import classes from './vetnik.module.scss'

const Vestink: FC = (): JSX.Element => {
  // vestnik Hero data
  const heroVestnik: HeroProps[] = [{
    image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665412442/Library-igu/vestnik_1_y930dg.png',
    title: 'Вестник Иссык-Кульского государственного университета',
    content: [
      { id: 1, text: ['Иссык-Кульский государственный университет им. К Тыныстанова'], title: 'Учредитель' },
      { id: 2, text: ['ISSN 1694-8211 (online)', 'ISSN 1561 - 9516 (print)'], title: 'Свидетельство о перерегистрации ГРО № 000601 от 26.02.2003г.' },
      { id: 3, title: 'Журнал издается с 1999 года' },
      { id: 4, title: 'Журнал выходит 2-3 раза в год' }
    ]
  }]
  // vestnik information
  const vestnikInformation: VestnikInformationI[] = [
    {
      id: 1, title: 'К публикации принимаются статьи на кыргызском, русском, казахском,турецком и английском языках',
      address: [
        { id: 1, name: 'Адресс', description: '722200, Кыргызская Республика, г. Каракол, ул. Абдрахманова, 103.' },
        { id: 2, name: 'Тел', description: '+996 3922 52696' },
        { id: 3, name: 'E-mail', description: 'interiksu@gmail.com' },
        { id: 4, name: 'Website', description: 'https://iksu.kg' }
      ]
    }
  ]
  return (
    <>
      <NextSeo
        title="Вестник Иссык-Кульского государственного университета - Научная библиотека ИГУ"
        description="Научная библиотека ИГУ,Вестник игу"
      />
      {/* Hero section */}
      {heroVestnik.map((h, i) => (
        <Hero
          title={h.title}
          image={h.image}
          content={h.content}
          key={i}
        />
      ))}
      {/* vestnik information */}
      <div className="container">
        {vestnikInformation.map(i => (
          <div className={classes.information} key={i.id}>
            <Title className={classes.informationTitle} type='h3'>{i.title}</Title>
            {i.address.map(a => (
              <div className={classes.informationItems} key={a.id}>
                <span>{a.name}</span>
                <span>{a.description}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
export default withLayout(Vestink)