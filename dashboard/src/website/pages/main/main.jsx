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
  const { page, isLoading } = useSelector(state => state.pages)

  useEffect(() => {
    dispatch(getOnePage(1))
  }, [isLoading])
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
        <Box
          display="flex"
          flexDirection="column"
          gap="10px"
        >
          <Box
            display="flex"
            gap="10px"
            mt="10px"
            mb="12px"
          >
            {page.map(p => (
              p.arrivalImage.map(a => (
                <img src={a.image} alt="" key={a.id} />
              ))
            ))}
          </Box>
          <Box
            display="flex"
            gap="6px"
          >
            {page.map(p => (
              p.arrivals.map(arrival => (
                <TabsComponent {...arrival} key={arrival.id} />
              ))
            ))}
          </Box>
        </Box>
      </Box>

    </>
  )
}

export default MainPage