import React from 'react'

// COMPONENTS
import {
  Header, Hero
} from '../../../components'

const MainPage = () => {
  return (
    <>
      <Header
        title="Главная страница сайта"
        subtitle="Пожалуйста, редактируйте страницы аккуратно! Не осторожное удаление одной страницы, приведет к критическим ошибкам сервера сайта!" />
      {/* HERO */}
      <Hero />
    </>
  )
}

export default MainPage