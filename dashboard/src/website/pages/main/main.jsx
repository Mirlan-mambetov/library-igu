import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOnePage } from '../../../store/pages/reducers/pageSlice'


// COMPONENTS
import {
  Header, Hero
} from '../../../components'


const MainPage = () => {
  const dispatch = useDispatch()
  const { isLoading, pages, page, errors } = useSelector(state => state.pages)

  useEffect(() => {
    dispatch(getOnePage(1))
  }, [])
  console.log(page);
  return (
    <>
      <Header
        title="Главная страница сайта"
        subtitle="Пожалуйста, редактируйте страницы аккуратно! Не осторожное удаление одной страницы, приведет к критическим ошибкам сервера сайта!" />
      {/* HERO */}
      {page.map(p => (
        p.hero.map(h => (
          <Hero {...h} key={h.id} />
        ))
      ))}
    </>
  )
}

export default MainPage