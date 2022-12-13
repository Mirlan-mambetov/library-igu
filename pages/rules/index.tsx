import { NextSeo } from 'next-seo'
import { FC } from 'react'
import { Hero, Title, Tabs } from '../../components'
import { RulesInterface } from '../../interfaces/rules.interface'
import { withLayout } from '../../Layout/WithLayout'


// STYLES
import classes from './rules.module.scss'

const Rules: FC = (): JSX.Element => {
  const rulesData: RulesInterface[] = [
    {
      id: 1,
      title: 'Правила пользования Научной библиотекой  Иссык-Кульского государственного университета им. К. Тыныстанова',
      author: 'Кадырова Эркингуль Касымовна',
      items: [
        {
          id: 1,
          description: 'Студенты,    аспиранты,    профессорско-преподавательский   состав,    научные   работники, сотрудники университета имеют право бесплатно пользоваться основными видами библиотечно-информационных услуг:',
          title: 'Читатели, их права, обязанности и ответственность'
        },
        {
          id: 2,
          description: 'Студенты,    аспиранты,    профессорско-преподавательский   состав,    научные   работники, сотрудники университета имеют право бесплатно пользоваться основными видами библиотечно-информационных услуг:',
          title: 'Порядок записи читателей в библиотеку'
        },
        {
          id: 3,
          description: 'Студенты,    аспиранты,    профессорско-преподавательский   состав,    научные   работники, сотрудники университета имеют право бесплатно пользоваться основными видами библиотечно-информационных услуг:',
          title: 'Порядок пользования читальными залами'
        },
        {
          id: 4,
          description: 'Студенты,    аспиранты,    профессорско-преподавательский   состав,    научные   работники, сотрудники университета имеют право бесплатно пользоваться основными видами библиотечно-информационных услуг:',
          title: 'Правила пользования абонементом'
        },
        {
          id: 5,
          description: 'Студенты,    аспиранты,    профессорско-преподавательский   состав,    научные   работники, сотрудники университета имеют право бесплатно пользоваться основными видами библиотечно-информационных услуг:',
          title: 'Правила пользования Интернет-классом'
        }
      ]
    }
  ]
  return (
    <>
      {/* SEO */}
      <NextSeo
        title="Правила пользования - Научная библиотека ИГУ"
        description="Научная библиотека ИГУ Правила пользования"
      />
      {/* Hero section */}
      <Hero
        title="Правила пользования"
      />
      {/* Rules */}
      <div className="container">
        {rulesData.map(rules => (
          <div className={classes.rules} key={rules.id}>
            <Title type='h3' className={classes.rulesTitle} >
              {rules.title}
            </Title>
            <div className={classes.rulesItems}>
              {rules.items.map(r => (
                <Tabs tabs={r} key={r.id} />
              ))}
            </div>
            <div className={classes.rulesAuthor}>
              С уважением директор Научной библиотеки
              <span>{rules.author}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default withLayout(Rules)
