import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Past from './pages/Past'
import Upcoming from './pages/Upcoming'
import Stats from './pages/Stats'

function App() {

  return (
    <>
    
      <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/past" element={<Past/>} />
            <Route path="/upcoming" element={<Upcoming/>} />
            <Route path="/stats" element={<Stats/>} />
            <Route path="*" element={<h2>ERROR 404</h2>} />
          </Routes>
      </Router>

      <Footer/>
    </>
  )
}

export default App
