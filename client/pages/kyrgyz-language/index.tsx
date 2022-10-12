import { NextSeo } from 'next-seo'
import { FC } from 'react'
import { Arhivs, Hero, Jurnal } from '../../components'
import { ArhivsProps } from '../../components/Arhivs/Arhivs.props'
import { HeroProps } from '../../components/Hero/Hero.props'
import { JurnalProps } from '../../components/Jurnal/Jurnal.props'
import { withLayout } from '../../Layout/WithLayout'


// STYLES
import classes from './KyrgyzLanguage.module.scss'

const KyrgyzLanguage: FC = (): JSX.Element => {
  // HeroData
  const heroData: HeroProps[] = [
    {
      title: 'Кыргыз - тили жана адабияты',
      content: [
        { id: 1, title: 'ВНИМАНИЕ: Предоставленные материалы будут проверяться на плагиат!' },
        { id: 2, title: 'В случае несоответствия поданных материалов одному из требований, материалы будут возвращаться!' },
        { id: 3, title: 'Уровень научности материала устанавливается редакционной коллегией!' }
      ]
    }
  ]
  const jurnalAbout: JurnalProps = {
    title: 'ПРАВИЛА ОФОРМЛЕНИЯ МАТЕРИАЛОВ',
    text: '1 - В публикуемых материалах указывается УДК, информация об авторах, их месте работы и электронный адрес;2 - Во всех публикуемых научных статьях должны быть пристатейные библиографические списки, оформленные в соответствии с правилами издания, на основании требований, предусмотренных действующими ГОСТами или АРА style(American Psychological Association);3 - При опубликовании научной статьи обязательным является наличие ключевых слов(не менее 5- 10 слов) и аннотации (не менее 100 - 250 слов) на кыргызском, русском и английском языках;4 - Текст статьи не менее 5 стр. (шрифт - Times New Romen, размер шрифта - 12; интервал - 1.0; поля - с 4х сторон – 2, 5 см) в электронном и печатном варианте;5 - К научным статьям  прикрепляются рецензии, с утверждением подписи рецензента печатью организации(при отправлении по электронной почте предоставлять сканированный вариант);6 - Оплата за публикацию 1 страница - 50 сом для преподавателей ИГУ им.К.Тынстанова, а для ученых и соискателей по республике и для иностранных граждан предусмотрена иная сумма оплаты;7 - Оригинальность текста при проверке на антиплагиат должно составлять не менее 70 % (самостоятельно оригинальность можете проверить по адресу: аntiplagiat.ru) ',
    image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665501046/Library-igu/123_1_xjcjys.png',
    subTitle: 'В связи с принятыми поправками в  «Положение о правилах формирования Перечня рецензируемых научных изданий для опубликования основных научных результатов диссертаций»  (Постановление президиума ВАК Кыргызской Республики от 01 Марта 2018 года №035) убедительная просьба  для публикации научных статей в  «Кыргыз тили жана адабияты»  материалы предоставлять в следующем виде'
  }
  // Arhivs
  const arhivsData: ArhivsProps[] = [
    {
      totalArhivs: 10,
      totalMaterials: 125,
      arhivTitle: 'Архивы',
      arhivs: [
        { id: 1, alias: '№11999', name: '№ 1 / 1999' },
        { id: 2, alias: '№11999', name: '№ 1 / 1999' },
        { id: 3, alias: '№11999', name: '№ 1 / 1999' },
        { id: 4, alias: '№11999', name: '№ 1 / 1999' },
        { id: 5, alias: '№11999', name: '№ 1 / 1999' },
        { id: 6, alias: '№11999', name: '№ 1 / 1999' },
        { id: 7, alias: '№11999', name: '№ 1 / 1999' },
        { id: 8, alias: '№11999', name: '№ 1 / 1999' }
      ]
    }
  ]
  return (
    <>
      <NextSeo
        title="Кыргыз - тили жана адабияты - Научная библиотека ИГУ"
        description="Научная библиотека ИГУ"
      />
      {/* Hero section */}
      <div className={classes.hero}>
        {heroData.map((h, i) => (
          <Hero
            key={i}
            title={h.title}
            content={h.content}
          />
        ))}
      </div>
      <div className="container">
        <div className={classes.jurnal}>
          {/* Jurnal */}
          <Jurnal
            image={jurnalAbout.image}
            subTitle={jurnalAbout.subTitle}
            text={jurnalAbout.text}
            title={jurnalAbout.title}
          />
        </div>
        {/* Arhivs */}
        {arhivsData.map((a, i) => (
          <Arhivs {...a} arhivLink="kyrgyz-language" key={i} />
        ))}
      </div>
    </>
  )
}

export default withLayout(KyrgyzLanguage)