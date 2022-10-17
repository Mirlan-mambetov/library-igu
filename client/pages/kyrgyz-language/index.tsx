import { NextSeo } from 'next-seo'
import React from 'react'
import { Arhivs, Button, Hero, Jurnal } from '../../components'
import { ArhivsI } from '../../Interfaces/Arhivs.interface'
import { HeroI } from '../../Interfaces/Hero.interface'
import { JurnalI } from '../../Interfaces/Jurnal.interface'
import { withLayout } from '../../Layout/WithLayout'

// STYLES
import styles from './kyrgyz.language.module.scss'

const KyrgyzLanguagePage = () => {
  // Hero Data
  const HeroData: HeroI[] = [
    {
      title: 'Кыргыз - тили жана адабияты',
      subContent: [
        { id: 1, title: 'ВНИМАНИЕ: Предоставленные материалы будут проверяться на плагиат!' },
        { id: 2, title: 'В случае несоответствия поданных материалов одному из требований, материалы будут возвращаться!' },
        { id: 3, title: 'Уровень научности материала устанавливается редакционной коллегией!' }
      ]
    }
  ]
  // Jurnal data
  const JurnalData: JurnalI[] = [
    {
      id: 1,
      jurnalAbout:
      {
        image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665501046/Library-igu/123_1_xjcjys.png',
        subTitle: 'В связи с принятыми поправками в  «Положение о правилах формирования Перечня рецензируемых научных изданий для опубликования основных научных результатов диссертаций»  (Постановление президиума ВАК Кыргызской Республики от 01 Марта 2018 года №035) убедительная просьба  для публикации научных статей в  «Кыргыз тили жана адабияты»  материалы предоставлять в следующем виде',
        text: '1 - В публикуемых материалах указывается УДК, информация об авторах, их месте работы и электронный адрес;2 - Во всех публикуемых научных статьях должны быть пристатейные библиографические списки, оформленные в соответствии с правилами издания, на основании требований, предусмотренных действующими ГОСТами или АРА style(American Psychological Association);3 - При опубликовании научной статьи обязательным является наличие ключевых слов(не менее 5- 10 слов) и аннотации(не менее 100- 250 слов) на кыргызском, русском и английском языках;  4 - Текст статьи не менее 5 стр. (шрифт - Times New Romen, размер шрифта - 12; интервал - 1.0; поля - с 4х сторон – 2, 5 см) в электронном и печатном варианте;  5 - К научным статьям  прикрепляются рецензии, с утверждением подписи рецензента печатью организации(при отправлении по электронной почте предоставлять сканированный вариант);  6 - Оплата за публикацию 1 страница - 50 сом для преподавателей ИГУ им.К.Тынстанова, а для ученых и соискателей по республике и для иностранных граждан предусмотрена иная сумма оплаты;  7 - Оригинальность текста при проверке на антиплагиат должно составлять не менее 70 % (самостоятельно оригинальность можете проверить по адресу: аntiplagiat.ru) ',
        title: 'ПРАВИЛА ОФОРМЛЕНИЯ МАТЕРИАЛОВ'
      }
    }
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
      information: { title: 'архивы', totalArhivs: 22, totalMaterials: 333 }
    }
  ]
  return (
    <>
      <NextSeo
        title="Кыргыз - тили жана адабияты - Научная библиотека ИГУ"
        description="Кыргыз - тили жана адабияты Научная библиотека ИГУ Вестник ИГУ им. К. Тыныстанова"
      />
      {/* Hero */}
      {HeroData.map((h, i) => (
        <Hero
          key={i}
          title={h.title}
          subContent={h.subContent}
          subContentOrientation="row"
        />
      ))}
      {/* About jurnal */}
      <section className={styles.aboutJurnal}>
        <div className="container">
          {JurnalData.map(jurnal => (
            <Jurnal {...jurnal} key={jurnal.id} />
          ))}
        </div>
      </section>
      {/* Arhivs */}
      <div className="container">
        <div className={styles.arhivs}>
          {ArhivsData.map((arhiv, i) => (
            <Arhivs data={arhiv} key={i} contentLink="kyrgyz-language" />
          ))}
          <div className={styles.arhivsBtn}>
            <Button orientation='right'>Показать больше архивов</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default withLayout(KyrgyzLanguagePage)