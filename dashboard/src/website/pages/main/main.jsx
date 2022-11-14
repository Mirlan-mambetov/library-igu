import React, { useEffect } from 'react'
import { Box } from '@mui/system'
import { Typography, useTheme } from '@mui/material'
import { tokens } from '../../../theme'
import { useSelector } from 'react-redux'
import { useActions } from '../../../hooks/redux'


// COMPONENTS
import {
  ButtonComponent,
  Header, Hero, TabsComponent
} from '../../../components'


const MainPage = () => {
  // ACTIONS

  const { getOnePage, openModal, updateContent, updateContentId } = useActions()
  // THEMES & COLORS
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const { page, isLoading } = useSelector(state => state.pages)


  useEffect(() => {
    getOnePage(1)
    // eslint-disable-next-line
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
      ))
      }
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
            alignItems="center"
            gap="10px"
            mt="10px"
            mb="12px"
          >
            {page.map(p => (
              p.arrivalImage.map(a => (
                <Box
                  sx={{ position: "relative" }}
                  key={a.id}
                >
                  <ButtonComponent
                    onClick={() => {
                      openModal()
                      updateContent("updateImageCards")
                      updateContentId(a.id)
                    }}
                    type="update"
                  />
                  <img
                    style={{ width: "120px", height: "180px" }}
                    src={`${process.env.REACT_APP_STATIC_FILES}/${a.image}`} alt="" />
                </Box>
              ))
            ))}
          </Box>
          <Box
            p="10px 20px 0px 20px"
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