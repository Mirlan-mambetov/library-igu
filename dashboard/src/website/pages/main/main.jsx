import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOnePage } from '../../../store/pages/reducers/pageSlice'


// COMPONENTS
import {
  Header, Hero, TabsComponent
} from '../../../components'
import { Box } from '@mui/system'
import { Typography, useTheme } from '@mui/material'
import { tokens } from '../../../theme'


const MainPage = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const dispatch = useDispatch()
  const { page } = useSelector(state => state.pages)

  useEffect(() => {
    dispatch(getOnePage(1))
  }, [])
  console.log(page);
  return (
    <>
      <Header
        title="Главная страница сайта"
        subtitle="здесь Вы можете редактировать, и добавлять информацию к главной странице" />
      {/* HERO */}
      {page.map(p => (
        p.hero.map(h => (
          <Hero {...h} key={h.id} />
        ))
      ))}
      {/* TABS */}
      <Box mt="20px">
        <Typography variant='h4' color={colors.greenAccent[400]}>
          Новые поступления
        </Typography>
        {page.map(p => (
          p.tabs.map(t => (
            <TabsComponent key={t.id} tabs={t} />
          ))
        ))}
      </Box>
    </>
  )
}

export default MainPage