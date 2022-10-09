import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { FC } from 'react'
import { Button, Hero, TextBox, Title } from '../../components'
import { AboutLinksProps } from '../../interfaces/AboutLinks.interface'
import { LibraryInformationInterface } from '../../interfaces/LibraryInformation.interface'
import { OnwerInterface } from '../../interfaces/Owner.interface'
import { ParagraphIterface } from '../../interfaces/Paragraph.interface'
import { withLayout } from '../../Layout/WithLayout'


// STYLES
import classes from './about.module.scss'

const About: FC = (): JSX.Element => {
  // About informations
  const Inforamations: ParagraphIterface[] = [
    { id: 1, title: 'немного об истории', paragraph: 'Научная библиотека была создана в 1940 году на базе книжного фонда учительского института и имела фонд  экземпляров изданий. Штат библиотеки состоял из 5 работников. За время существования Научная библиотека выросла в крупный научно-информационный центр, с фондом 431507 экземпляров изданий, распределенной по абонементу и трем читальным залам.' },
    { id: 2, title: 'задачи', paragraph: 'Научная библиотека ИГУ имени Касыма Тыныcтанова –  это информационно - деловой центр университета, ее цель - обеспечить доступ к знаниям в процессе обучения, качественное и оперативное обслуживание пользователей.' },
    { id: 3, paragraph: 'Основная задача Научной библиотеки - удовлетворять потребности пользователя в информации, делать ее доступной, полной и оперативной.' },
    { id: 4, title: 'инофрмация', paragraph: 'Университетская библиотека сегодня все чаще ассоцируется с понятиями интеллект, знания и профессионализм. Здесь накапливаются и систематизируются все возможные виды информации и обеспечивается современный уровень информационной поддержки процессов образования и научно-исследовательской деятельности. На ведущее место выходит задача предоставления  профессорско-преподавательскому составу и будущим специалистам (студентам, магистрантам, аспирантам) свободного и неограниченного доступа ко всей нужной им информации независимо от ее наличия в библиотечном фонде. Среди актуальных направлений деятельности Научной библиотеки ИГУ – поддержка и продвижение библиотечного веб-сайта, использование в учебном и научно-исследовательском процессах электронных ресурсов удаленного доступа, развитие онлайновых услуг на основе собственных документных фондов, формирование информационной культуры пользователей.' },
    { id: 5, paragraph: 'Библиотека стремится к тому, чтобы создать все условия для плодотворной учебы студентов, для научной деятельности преподавателей, для максимального удовлетворения информационных запросов и развития широких интересов пользователей.', image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665331529/Library-igu/IMG_7529-1200x600_1_b3k6v6.png' }
  ]
  // Owner
  const owner: OnwerInterface = { id: 1, email: ' igulibrary@rambler.ru', image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665333551/Library-igu/new_1_p0pz1m.png', name: 'Кадырова Эркингуль Касымовна', phone: '(03922)5-21-80' }
  // Library information
  const libraryInformation: LibraryInformationInterface[] = [
    { id: 1, num: 431507, text: 'книг' },
    { id: 2, num: 8, text: 'сотрудников' },
    { id: 3, num: 3, text: 'зала' }
  ]
  // About LInks
  const aboutLinks: AboutLinksProps[] = [{
    rules: { title: 'Правила пользования' },
    phond: [
      { id: 1, link: 'http://nbisu.moy.su/_ld/22/2228_IGUTAUBAEVA2007.pdf', title: 'Книжный фонд - PDF' },
      { id: 2, link: 'http://nbisu.moy.su/_ld/22/2228_IGUTAUBAEVA2007.pdf', title: 'Подписка на периодические издания (2019 год) - PDF' }
    ]
  }]
  return (
    <>
      {/* SEO */}
      <NextSeo
        title="О библиотеке - Научная библиотека ИГУ"
        description="Научная библиотека ИГУ, о библиотеке научной библиотеки"
      />
      {/* Hero */}
      <Hero
        title="О библиотеке"
        image='https://res.cloudinary.com/djzubalr7/image/upload/v1665329375/Library-igu/about-bg_bnwqj3.png'
      />
      <div className="container">
        {/* History */}
        <div className={classes.history}>
          {Inforamations.map(i => (
            <TextBox {...i} key={i.id} />
          ))}
        </div>
        {/* Owner */}
        <div className={classes.owner}>
          <div className={classes.ownerWrapp}>
            <div className={classes.ownerImage}>
              <img src={owner.image} alt={owner.name} />
            </div>
            <div className={classes.ownerContent}>
              <Title type='h4' className={classes.ownerTitle}>
                Директор Научной библиотеки
                <span>{owner.name}</span>
              </Title>
              <div className={classes.ownerContacts}>
                <div className={classes.ownerItems}>
                  <span>Рабочий телефон:</span>
                  <a href={`tel:${owner.phone}`}>{owner.phone}</a>
                </div>
                <div className={classes.ownerItems}>
                  <span>E-mail:</span>
                  <a href={`mailto:${owner.email}`}>{owner.email}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Library information */}
      <div className={classes.libraryInformation}>
        <div className="container">
          <div className={classes.libraryInformationWrapp}>
            {libraryInformation.map(i => (
              <div className={classes.libraryInformationItem} key={i.id}>
                <strong>{i.num}+</strong>
                <span>{i.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Links */}
      <div className="container">
        {aboutLinks.map((links, i) => (
          <div className={classes.links} key={i}>
            <div className={classes.linksItem} >
              <div className={classes.linksItemContent}>
                <Title type='h3' className={classes.linksItemTitle}>правила пользования</Title>
                <Link href="/rules">
                  <a>
                    <Button orientation='right'>{links.rules.title}</Button>
                  </a>
                </Link>
              </div>
            </div>
            <div className={classes.linksItem}>
              <div className={classes.linksItemContent}>
                <Title type='h3' className={classes.linksItemTitle}>фонд библиотеки</Title>
                {links.phond.map(i => (
                  <Link href={`${i.link}`} key={i.id}>
                    <a>
                      <Button orientation='right'>{i.title}</Button>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default withLayout(About)
