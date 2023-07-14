import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import StateContext from './store/StateContext'
import { useContext, useEffect } from 'react'
import axios from 'axios'

import Header from './components/Header'
import Footer from './components/Footer'
import Events from './pages/Events'
import Past from './pages/Past'
import Upcoming from './pages/Upcoming'
import Stats from './pages/Stats'
import Details from './pages/Details'
import Home from './pages/Home'
import Error404 from './pages/Error404'

import './App.css'

function App() {

  let {loadEventos,loadEventosPasados,loadEventosFuturos} = useContext(StateContext)

  useEffect(() => {
    axios.get("https://mindhub-xj03.onrender.com/api/amazing")
        .then((response) => {
          let eventosPasados = response.data.events.filter((evento) => evento.date < response.data.currentDate)
          let eventosFuturos = response.data.events.filter((evento) => evento.date > response.data.currentDate)
          loadEventos(response.data.events)
          loadEventosPasados(eventosPasados)
          loadEventosFuturos(eventosFuturos)
        });
}, []);


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
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>

      <Footer />
    </>
  )
}

export default App
