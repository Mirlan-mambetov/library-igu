import { NextSeo } from 'next-seo'
import { FC } from 'react'
import { Hero, TeacherCategories } from '../../components'
import { HeroI } from '../../Interfaces/Hero.interface'
import { withLayout } from '../../Layout/WithLayout'
import { CategoryI } from '../../Interfaces/Categories.interface'

const WindowPage: FC = (): JSX.Element => {
  // Hero Data
  const HeroData: HeroI[] = [
    {
      title: 'Единое окно'
    }
  ]
  // Catgories Data
  const CategoriesData: CategoryI[] = [
    { id: 1, alias: 'teachers', subTitle: 'Задолжности преподавателей', title: 'Преподаватели' },
    { id: 2, alias: 'personals', subTitle: 'Задолжности сотрудников', title: 'Сотрудники' },
    { id: 3, alias: 'students', subTitle: 'Задолжности Студенты', title: 'Студенты' }
  ]
  return (
    <>
      <NextSeo
        title="Единое окно - Научная библиотека ИГУ"
        description="Единое окно Научная библиотека ИГУ"
      />
      {/* Hero */}
      {HeroData.map((h, i) => (
        <Hero
          key={i}
          title={h.title}
        />
      ))}
      {/* Categories */}
      <section className="categories">
        <div className="container">
          <TeacherCategories category={CategoriesData} categoryLink="window" />
        </div>
      </section>
    </>
  )
}

export default withLayout(WindowPage)