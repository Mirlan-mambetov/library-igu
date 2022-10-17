import { NextSeo } from 'next-seo'
import React from 'react'
import { Hero, Tabs, Jurnal, Arhivs, Button } from '../../components'
import { ArhivsI } from '../../Interfaces/Arhivs.interface'
import { HeroI, SubcontentI } from '../../Interfaces/Hero.interface'
import { JurnalI } from '../../Interfaces/Jurnal.interface'
import { TabsInterface } from '../../Interfaces/Tabs.interface'
import { withLayout } from '../../Layout/WithLayout'


// STYLES
import styles from './vestnik.module.scss'

const Vestnik = () => {
  // Hero Data
  const HeroData: HeroI[] = [
    {
      title: 'Вестник Иссык-Кульского государственного университета',
      backGround: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665412442/Library-igu/vestnik_1_y930dg.png',
      subContent: [
        { id: 1, description: ['Иссык-Кульский государственный университет им. К Тыныстанова'], title: 'Учредитель' },
        { id: 2, description: ['ISSN 1561 - 9516 (print)', 'ISSN 1694-8211 (online)'], title: 'Свидетельство о перерегистрации ГРО № 000601 от 26.02.2003г.' },
        { id: 3, description: ['Журнал издается с 1999 года'] },
        { id: 4, description: ['Журнал выходит 2-3 раза в год'] }
      ],
    }
  ]
  // Jurnal data
  const JurnalData: JurnalI[] = [
    {
      id: 1,
      jurnalAbout:
      {
        image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665423857/Library-igu/vestnik-image_1_1_fhv5rb.png',
        subTitle: '«Вестник Иссык-Кульского государственного университета» основан в январе 1999 года.',
        text: 'Этот журнал публикует статьи, результаты научно-методических исследований педагогов, ученых, аспирантов, докторантов и соискателей, полностью отвечающих требованиям издательства. Журнал имеет разрешение Международного издательского общества и комиссии НАК КР на публикацию статей для подготовки кандидатских и докторских диссертаций.«Вестник ИГУ» является научно - теоретическим, методическим и информационным журналом, руководствующимся положениями и принципами Конституции КР, а также «Законом о средствах массовой информации», «Законом о государственном языке», Национальной образовательной программой «Билим», Гражданским Кодексом КР и другими законодательными актами Кыргызской Республики.В настоящее время журнал является единственным научноинформационным и методическим журналом в Иссык - Кульском регионе и издается 2 - 3 раза в год на кыргызском, русском и английском языках.«Вестник ИГУ» является активным проводником научно - технической политики нашего государства, пособником осуществления социальнополитических, экономических, научно - образовательных реформ, пропагандируя новейшие достижения науки и техники, как отечественный, так и зарубежный.Все это являются главной задачей журнала.Свою деятельность редакционная коллегия журнала ведет в тесном сотрудничестве с ближним и дальним зарубежьем.Редакция подготавливает совместные издания отдельных номеров и соответствующими министерствами и ведомствами по приоритетным направлениям науки и новым технологиям.В состав редколлегии журнала «Вестник ИГУ» входит главный редактор, зам.главного редактора, ответственный секретарь, главный специалист, редакторы - корректоры, инженер - программист.',
        title: 'О журнале'
      }
      ,
      information:
      {
        id: 2,
        address: [
          { id: 1, description: '722200, Кыргызская Республика, г. Каракол, ул. Абдрахманова, 103.', name: 'Адресс' },
          { id: 2, description: '+996 3922 52696', name: 'Тел' },
          { id: 3, description: 'interiksu@gmail.com', name: 'E-mail' },
          { id: 4, description: 'https://iksu.kg', name: 'Website' }
        ],
        title: 'К публикации принимаются статьи на кыргызском, русском, казахском,турецком и английском языках'
      }
    }
  ]
  // about vestnik
  const AboutVestnik: TabsInterface[] = [
    { id: 1, title: 'Рубрики журнала', isLink: [{ id: 1, link: 'http://nbisu.moy.su/_ld/36/3654_IGUKOYLUBAEV201.pdf', name: 'Рубрика - 1 PDF' }, { id: 2, link: 'http://nbisu.moy.su/_ld/36/3654_IGUKOYLUBAEV201.pdf', name: 'Рубрика - 2 PDF' }, { id: 3, link: 'http://nbisu.moy.su/_ld/36/3654_IGUKOYLUBAEV201.pdf', name: 'Рубрика - 3 PDF' }] },
    { id: 2, title: 'Редакция', isLink: [{ id: 1, link: 'http://nbisu.moy.su/_ld/36/3654_IGUKOYLUBAEV201.pdf', name: 'Редакционная коллегия ' }, { id: 2, link: 'http://nbisu.moy.su/_ld/36/3654_IGUKOYLUBAEV201.pdf', name: 'Редакционная политика' }] },
    { id: 3, title: 'Порядок рецензирования', isLink: [{ id: 1, link: 'http://nbisu.moy.su/_ld/36/3654_IGUKOYLUBAEV201.pdf', name: 'Порядок рецензирования' }] },
    { id: 4, title: 'Авторам', isLink: [{ id: 1, link: 'http://nbisu.moy.su/_ld/36/3654_IGUKOYLUBAEV201.pdf', name: 'Требования по оформлению стайте' }, { id: 2, link: 'http://nbisu.moy.su/_ld/36/3654_IGUKOYLUBAEV201.pdf', name: 'Примеры оформления списка литературы' }, { id: 3, link: 'http://nbisu.moy.su/_ld/36/3654_IGUKOYLUBAEV201.pdf', name: 'Рекомендации по написанию аннотации' }] }
  ]
  // Arhiivs
  const ArhivsData: ArhivsI[] = [
    {
      links: [
        { id: 1, alias: '№11999', name: '№ 1 / 1999' },
        { id: 2, alias: '№12000', name: '№ 1 / 2000' },
        { id: 3, alias: '№12001', name: '№ 1 / 2001' },
        { id: 4, alias: '№12002', name: '№ 1 / 2002' },
        { id: 5, alias: '№12003', name: '№ 1 / 2003' },
        { id: 6, alias: '№12004', name: '№ 1 / 2004' },
        { id: 7, alias: '№12005', name: '№ 1 / 2005' },
        { id: 8, alias: '№12006', name: '№ 1 / 2006' },
        { id: 9, alias: '№12007', name: '№ 1 / 2007' },
        { id: 10, alias: '№12008', name: '№ 1 / 2008' }
      ],
      information: { title: 'архивы вестника', totalArhivs: 22, totalMaterials: 333 }
    }
  ]
  return (
    <>
      <NextSeo
        title="Вестник - Научная библиотека ИГУ"
        description="Научная библиотека ИГУ Вестник ИГУ им. К. Тыныстанова"
      />
      {/* Hero */}
      {HeroData.map((h, i) => (
        <Hero
          key={i}
          title={h.title}
          subContent={h.subContent}
          background={h.backGround}
        />
      ))}
      {/* Jurnal about */}
      <div className="container">
        <div className={styles.jurnalAbout}>
          {JurnalData.map(jurnal => (
            <Jurnal {...jurnal} key={jurnal.id} />
          ))}
        </div>
        <div className={styles.aboutVestnik}>
          {AboutVestnik.map(tabs => (
            <Tabs tabs={tabs} key={tabs.id} />
          ))}
        </div>
      </div>
      {/* Arhivs */}
      <div className="container">
        <div className={styles.arhivs}>
          {ArhivsData.map((arhiv, i) => (
            <Arhivs data={arhiv} key={i} contentLink="vestnik" />
          ))}
          <div className={styles.arhivsBtn}>
            <Button orientation='bottom'>Показать больше архивов</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default withLayout(Vestnik)