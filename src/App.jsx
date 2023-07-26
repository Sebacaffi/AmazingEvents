import { Route, Routes, useNavigate } from 'react-router-dom'
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
import Login from './pages/Login'
import Logout from './pages/Logout'
import Register from './pages/Register'

import './App.css'

function App() {

  let navigate = useNavigate()

  let { loadEventos, loadEventosPasados, loadEventosFuturos } = useContext(StateContext)

  useEffect(() => {
    
    axios.defaults.withCredentials = true
    axios.get("http://localhost:3000/api/eventos")
      .then((response) => {
        let currentDate = '2023-03-10'
        let eventosPasados = response.data.filter((evento) => evento.date < currentDate)
        let eventosFuturos = response.data.filter((evento) => evento.date > currentDate)
        loadEventos(response.data)
        loadEventosPasados(eventosPasados)
        loadEventosFuturos(eventosFuturos)
      })
      .catch(error => {
        navigate("/login")
      });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<Events />} />
        <Route path="/past" element={<Past />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/stats" element={<Stats />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
