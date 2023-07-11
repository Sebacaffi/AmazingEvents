import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Events from './pages/Events'
import Past from './pages/Past'
import Upcoming from './pages/Upcoming'
import Stats from './pages/Stats'
import Details from './pages/Details'
import Home from './pages/Home'

import './App.css'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/past" element={<Past />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/stats" element={<Stats />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path="*" element={<h2>ERROR 404</h2>} />
        </Routes>
      </Router>

      <Footer />
    </>
  )
}

export default App
