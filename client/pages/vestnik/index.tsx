import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { FC } from 'react'
import { Arhivs, Button, Hero, Jurnal, Title } from '../../components'
import { ArhivsProps } from '../../components/Arhivs/Arhivs.props'
import { HeroProps } from '../../components/Hero/Hero.props'
import { JurnalProps } from '../../components/Jurnal/Jurnal.props'
import { TabsInterface } from '../../interfaces/Tabs.interface'
import { VestnikInformationI } from '../../interfaces/Vestnik.interface'
import { withLayout } from '../../Layout/WithLayout'

// STYLES
import classes from './vestnik.module.scss'

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
  // jurnal about
  const jurnalAbout: JurnalProps = {
    title: 'О журнале',
    text: 'Этот журнал публикует статьи, результаты научно-методических исследований педагогов, ученых, аспирантов, докторантов и соискателей, полностью отвечающих требованиям издательства. Журнал имеет разрешение Международного издательского общества и комиссии НАК КР на публикацию статей для подготовки кандидатских и докторских диссертаций. «Вестник ИГУ» является научно - теоретическим, методическим и информационным журналом, руководствующимся положениями и принципами Конституции КР, а также «Законом о средствах массовой информации», «Законом о государственном языке», Национальной образовательной программой «Билим», Гражданским Кодексом КР и другими законодательными актами Кыргызской Республики. В настоящее время журнал является единственным научноинформационным и методическим журналом в Иссык - Кульском регионе и издается 2 - 3 раза в год на кыргызском, русском и английском языках. «Вестник ИГУ» является активным проводником научно - технической политики нашего государства, пособником осуществления социальнополитических, экономических, научно - образовательных реформ, пропагандируя новейшие достижения науки и техники, как отечественный, так и зарубежный.Все это являются главной задачей журнала.Свою деятельность редакционная коллегия журнала ведет в тесном сотрудничестве с ближним и дальним зарубежьем.Редакция подготавливает совместные издания отдельных номеров и соответствующими министерствами и ведомствами по приоритетным направлениям науки и новым технологиям.В состав редколлегии журнала «Вестник ИГУ» входит главный редактор, зам.главного редактора, ответственный секретарь, главный специалист, редакторы - корректоры, инженер - программист.',
    image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665423857/Library-igu/vestnik-image_1_1_fhv5rb.png',
    subTitle: '«Вестник Иссык-Кульского государственного университета» основан в январе 1999 года. '
  }
  // Jurnal information
  const jurnalInformation: TabsInterface[] = [
    {
      id: 1, title: 'Рубрики журнала',
      isLink: [
        { id: 1, link: 'http://nbisu.moy.su/_ld/35/3525_2668_IGUKIDIBAE.pdf', name: 'Рубрика - 1 PDF' },
        { id: 2, link: 'http://nbisu.moy.su/_ld/35/3525_2668_IGUKIDIBAE.pdf', name: 'Рубрика - 2 PDF' },
        { id: 3, link: 'http://nbisu.moy.su/_ld/35/3525_2668_IGUKIDIBAE.pdf', name: 'Рубрика - 3 PDF' },
      ]
    },
    {
      id: 2, title: 'Порядок рецензирования',
      isLink: [
        { id: 1, link: 'http://nbisu.moy.su/_ld/35/3525_2668_IGUKIDIBAE.pdf', name: 'Порядок рецензирования' },
      ]
    },
    {
      id: 3, title: 'Редакция',
      isLink: [
        { id: 1, link: 'http://nbisu.moy.su/_ld/35/3525_2668_IGUKIDIBAE.pdf', name: 'Редакционная политика' },
        { id: 2, link: 'http://nbisu.moy.su/_ld/35/3525_2668_IGUKIDIBAE.pdf', name: 'Редакционная коллегия' },
      ]
    },
    {
      id: 4, title: 'Авторам',
      isLink: [
        { id: 1, link: 'http://nbisu.moy.su/_ld/35/3525_2668_IGUKIDIBAE.pdf', name: 'Требования по оформлению стайте' },
        { id: 2, link: 'http://nbisu.moy.su/_ld/35/3525_2668_IGUKIDIBAE.pdf', name: 'Примеры оформления списка литературы' },
        { id: 3, link: 'http://nbisu.moy.su/_ld/35/3525_2668_IGUKIDIBAE.pdf', name: 'Рекомендации по написанию аннотации' },
      ]
    }
  ]
  // Arhivs
  const arhivsData: ArhivsProps[] = [
    {
      totalArhivs: 70,
      totalMaterials: 5032,
      arhivs: [
        { id: 1, alias: '№11999', name: '№ 1 / 1999' },
        { id: 2, alias: '№11999', name: '№ 1 / 1999' },
        { id: 3, alias: '№11999', name: '№ 1 / 1999' },
        { id: 4, alias: '№11999', name: '№ 1 / 1999' },
        { id: 5, alias: '№11999', name: '№ 1 / 1999' },
        { id: 6, alias: '№11999', name: '№ 1 / 1999' },
        { id: 7, alias: '№11999', name: '№ 1 / 1999' }
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
        {/* Jurnal about */}
        <Jurnal
          image={jurnalAbout.image}
          subTitle={jurnalAbout.subTitle}
          text={jurnalAbout.text}
          information={jurnalInformation}
          title={jurnalAbout.title}
        />
        {/* Arhivs */}
        {arhivsData.map((a, i) => (
          <Arhivs {...a} arhivLink="vestnik" key={i} />
        ))}
      </div>
    </>
  )
}
export default withLayout(Vestink)