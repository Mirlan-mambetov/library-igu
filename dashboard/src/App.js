import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ColorModeContext, useMode } from './theme'
import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'


// Components
import {
  Loader,
  Modal
} from './components'

// DASHBOARD PANEL PAGES
import {
  Dashboard, SidebarApp, Topbar, Bar, Faq,
  Form, Geography, Invoices, Line, Calendar
} from './dashboard-panel'

// WEBSITE PAGES
import {
  AboutPage,
  ElibraryPage,
  KyrgyzLanguagePage,
  MainPage,
  VestnikPage
} from './website/pages'
import { fetchPages } from './store/pages/actions/pageActions'


const App = () => {
  const dispatch = useDispatch()
  const { pages, isLoading } = useSelector(state => state.pages)
  const { isOpen } = useSelector(state => state.modal)
  const [theme, colorMode] = useMode()

  useEffect(() => {
    dispatch(fetchPages())
  }, [])
  console.log(pages)
  return (
    <>
      {isOpen && <Modal open={isOpen} />}
      {isLoading && <Loader />}
      <ColorModeContext.Provider value={colorMode}>
        {/* THEME PROVIDER */}
        <ThemeProvider theme={theme}>
          {/* RESET CSS */}
          <CssBaseline />
          <div className='app'>
            {/* SIDEBAR */}
            <SidebarApp />
            <main className='content'>
              <Topbar />
              <Box pl={"30px"} pb={"40px"}>
                <Routes>
                  {/* INNER PAGES (DASHBOARD PAGES) */}
                  <Route path='/' element={<Dashboard />} />
                  <Route path='/geography' element={<Geography />} />
                  <Route path='/bar' element={<Bar />} />
                  <Route path='/invoices' element={<Invoices />} />
                  <Route path='/line' element={<Line />} />
                  <Route path='/faq' element={<Faq />} />
                  <Route path='/form' element={<Form />} />
                  <Route path='/calendar' element={<Calendar />} />
                  {/* PAGES (WEBSITE PAGES)*/}
                  <Route path='/main-page' element={<MainPage />} />
                  <Route path='/about' element={<AboutPage />} />
                  <Route path='/vestnik' element={<VestnikPage />} />
                  <Route path='/kyrgyz-language' element={<KyrgyzLanguagePage />} />
                  <Route path='/elibrary' element={<ElibraryPage />} />
                </Routes>
              </Box>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  )
}

export default App