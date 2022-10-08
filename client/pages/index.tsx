import { FC } from "react"
import { withLayout } from "../Layout/WithLayout"
import { NextSeo } from "next-seo"
import { Hero, ImageCards, News, Tabs, Title } from "../components"
import { NewsProps } from "../interfaces/News.props"
import { Swiper, SwiperSlide } from 'swiper/react'
import { ImageCardsIterface } from "../interfaces/ImageCards.props"
import { TabsInterface } from "../interfaces/Tabs.interface"
import { PartnersInterface } from "../interfaces/Partners.props"
import Link from "next/link"



// STYLES
import classes from '../styles/Pages/Home.module.scss'
import 'swiper/css'
import 'swiper/css/pagination'

const Home: FC = (): JSX.Element => {
  // Newses
  const newses: NewsProps[] = [
    { id: 1, date: 'Май 2022', description: '17 мая 2022 года Научную библиотеку Иссык-Кульского государственного университета посетил министр образования и науки Кыргызской ', image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665224754/Library-igu/news/news-1_xuprwf.png', title: 'Международная конференция библиотекарей СНГ' },
    { id: 2, date: 'Май 2022', description: 'В Научной библиотеке ИГУ им.К.Тыныстанова состоялась встреча библиотекарей СНГ в рамках международной конференции на тему', image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665224751/Library-igu/news/news-2_wewje1.png', title: 'Министр образования и науки КР в Научной библиотеке ИГУ...' },
    { id: 3, date: 'Май 2022', description: '19 мая 2021 года состоялось открытие выставки "Индия в Кыргызской Республике - выставка искусства и жизни Индии", приуроченная году', image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665224746/Library-igu/news/news-3_xpheil.png', title: 'Индия в Кыргызской Республике - выставка искусства и жизни Индии' }
  ]
  // New arrivals
  const newArrivals: ImageCardsIterface[] = [
    { id: 1, image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665232907/Library-igu/news/card1_ymzwfw.png' },
    { id: 2, image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665232904/Library-igu/news/card3_mgwvo1.png' },
    { id: 3, image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665232900/Library-igu/news/card2_w16gcf.png' },
    { id: 4, image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665232893/Library-igu/news/card4_ji6esk.png' }
  ]
  // Tabs arrivals
  const arrivalTabs: TabsInterface[] = [
    { id: 1, link: 'http://nbisu.moy.su/Novinki/sentjabr_2019.pdf', name: "Сентябрь 2022 - PDF" },
    { id: 2, link: 'http://nbisu.moy.su/Novinki/oktjabr_2019.pdf', name: "Октябрь 2022 - PDF" }
  ]
  // Partners
  const partners: PartnersInterface[] = [
    { id: 1, image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665243062/Library-igu/partners/p1_eajtag.png', link: 'toktom' },
    { id: 2, image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665243061/Library-igu/partners/p2_plukjr.png', link: 'eurazian' },
    { id: 3, image: 'https://res.cloudinary.com/djzubalr7/image/upload/v1665243057/Library-igu/partners/p3_d0eaxd.png', link: 'google.com' }
  ]
  return (
    <>
      <NextSeo
        title="Главная - Научная библиотека ИГУ"
        description="Научная библиотека ИГУ"
        additionalMetaTags={[
          { property: 'og:title', content: 'Научная библиотека ИГУ' }
        ]}
      />
      {/* Hero section */}
      <Hero
        title="Научная библиотека ИГУ им. К. Тыныстанова"
        image="https://res.cloudinary.com/djzubalr7/image/upload/v1665219599/Library-igu/background-default_z6g7u1.png"
      />
      {/* News */}
      <News news={newses} />
      {/* New arrivals */}
      <div className={classes.arrivals}>
        <div className="container">
          <Title type="h3">новые поступления</Title>
          <div className={classes.arrivalsWrapp}>
            <ImageCards className={classes.books} images={newArrivals} />
            <div className={classes.content}>
              <Tabs tabs={arrivalTabs} title="Книжняя литература" />
              <Tabs tabs={arrivalTabs} title="Периодические издания - PDF" />
            </div>
          </div>
        </div>
      </div>
      {/* Partners */}
      <div className="container">
        <div className={classes.partners}>
          <Title type="h3">Партнеры библиотеки</Title>
          <Swiper
            autoplay={{ delay: 1200, pauseOnMouseEnter: true, disableOnInteraction: false }}
            loop
            pagination={{ type: 'progressbar', el: `.${classes.slideProgress}` }}
            slidesPerView={3}
            className={classes.slider}
            breakpoints={{
              320: {
                slidesPerView: 1.2
              },
              400: {
                slidesPerView: 1.8
              },
              600: {
                slidesPerView: 2.1
              },
              800: {
                slidesPerView: 2.7
              },
              1000: {
                slidesPerView: 3
              }
            }}
          >
            {partners.map(p => (
              <SwiperSlide key={p.id} className={classes.slide}>
                <Link href={`${p.link}`}>
                  <a>
                    <img src={p.image} alt={p.link} />
                  </a>
                </Link>
              </SwiperSlide>
            ))}
            <div className={classes.slideProgress}></div>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default withLayout(Home)