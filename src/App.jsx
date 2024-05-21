import React from 'react'
import Sidebar from './Compo/Siderbar/Sidebar'
import Main from './Compo/Main/Main'
import 'regenerator-runtime/runtime';
import './index.css'

import  { ThemeProvider } from './Context/ThemeContext';
const App = () => {
  return (
    < >
      <ThemeProvider>
        <Sidebar />
        <Main />
      </ThemeProvider>
    </>
  )
}

export default App
