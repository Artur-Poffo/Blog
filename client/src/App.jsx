import React from 'react'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import GlobalStyles from './styles/GlobalStyles'

import Navbar from "./components/Navbar"
import Home from './pages/Home'

function App() {
  return (
    <>
      <Router>
        <Navbar links={["Home", "Novidades", "Contato"]} />

        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>

      <GlobalStyles />
    </>
  )
}

export default App
