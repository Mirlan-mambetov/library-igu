import { NextSeo } from 'next-seo'
import React from 'react'
import { Hero, Arhivs } from '../../../components'
import { ArhivsProps } from '../../../components/Arhivs/Arhivs.props'
import { HeroProps } from '../../../components/Hero/Hero.props'
import { withLayout } from '../../../Layout/WithLayout'

const ArhivsPage = () => {
  // vestnik Hero data
  const heroVestnik: HeroProps[] = [{
    image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665412442/Library-igu/vestnik_1_y930dg.png',
    title: 'Архивы - Вестник Иссык-Кульского государственного университета',
  }]
  // Arhivs
  const arhivsData: ArhivsProps[] = [
    {
      totalArhivs: 70,
      totalMaterials: 5032,
      arhivTitle: "Архивы",
      arhivs: [
        { id: 1, alias: '№11999', name: '№ 1 / 1999' },
        { id: 2, alias: '№11999', name: '№ 1 / 1999' },
        { id: 3, alias: '№11999', name: '№ 1 / 1999' },
        { id: 4, alias: '№11999', name: '№ 1 / 1999' },
        { id: 5, alias: '№11999', name: '№ 1 / 1999' },
        { id: 6, alias: '№11999', name: '№ 1 / 1999' },
        { id: 7, alias: '№11999', name: '№ 1 / 1999' },
        { id: 8, alias: '№11999', name: '№ 1 / 1999' },
        { id: 9, alias: '№11999', name: '№ 1 / 1999' },
        { id: 10, alias: '№11999', name: '№ 1 / 1999' },
        { id: 11, alias: '№11999', name: '№ 1 / 1999' },
        { id: 12, alias: '№11999', name: '№ 1 / 1999' },
        { id: 13, alias: '№11999', name: '№ 1 / 1999' },
        { id: 14, alias: '№11999', name: '№ 1 / 1999' },
        { id: 15, alias: '№11999', name: '№ 1 / 1999' },
        { id: 16, alias: '№11999', name: '№ 1 / 1999' },
        { id: 17, alias: '№11999', name: '№ 1 / 1999' },
        { id: 18, alias: '№11999', name: '№ 1 / 1999' },
        { id: 19, alias: '№11999', name: '№ 1 / 1999' },
        { id: 20, alias: '№11999', name: '№ 1 / 1999' },
        { id: 21, alias: '№11999', name: '№ 1 / 1999' },
        { id: 22, alias: '№11999', name: '№ 1 / 1999' },
        { id: 23, alias: '№11999', name: '№ 1 / 1999' },
        { id: 24, alias: '№11999', name: '№ 1 / 1999' },
        { id: 25, alias: '№11999', name: '№ 1 / 1999' },
        { id: 26, alias: '№11999', name: '№ 1 / 1999' },
        { id: 27, alias: '№11999', name: '№ 1 / 1999' },
        { id: 28, alias: '№11999', name: '№ 1 / 1999' },
      ]
    }
  ]
  return (
    <>
      <NextSeo
        title="Архивы - Вестник Иссык-Кульского государственного университета - Научная библиотека ИГУ"
        description="Архивы Вестника Научная библиотека ИГУ,Вестник игу"
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
      {/* Arhivs all*/}
      <div className="container">
        {/* Arhivs */}
        {arhivsData.map((a, i) => (
          <Arhivs {...a} arhivLink="vestnik" key={i} full={false} />
        ))}
      </div>
    </>
  )
}

export default withLayout(ArhivsPage)