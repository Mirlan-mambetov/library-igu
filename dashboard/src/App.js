import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'

// SCENCE
import {
  Dashboard, SidebarApp, Topbar, Bar, Faq,
  Form, Geography, Invoices, Line, Pie, Calendar
} from './scenes'

const App = () => {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <SidebarApp />
          <main className="content">
            <Topbar />
            <div className="subcontent">
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/pie' element={<Pie />} />
                <Route path='/geography' element={<Geography />} />
                <Route path='/bar' element={<Bar />} />
                <Route path='/invoices' element={<Invoices />} />
                <Route path='/line' element={<Line />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/form' element={<Form />} />
                <Route path='/calendar' element={<Calendar />} />
              </Routes>
            </div>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App