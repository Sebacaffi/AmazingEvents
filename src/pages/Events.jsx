import { useState, useEffect, useContext } from "react"
import StateContext from '../store/StateContext'
import Cards from "../components/Cards"
import Buscador from "../components/Filtros/Buscador"
import Checkbox from "../components/Filtros/CheckBox"
import './style.css'

const Events = () => {

    let {eventos} = useContext(StateContext)

    const [eventoFiltrado, setEventoFiltrado] = useState(eventos)

    let [categories, setCategories] = useState([])

    useEffect(()=>{
        setEventoFiltrado(eventos)
    },[eventos])

    const filtrarEventos = (text) => {
        if (text != "" && categories.length > 0) {
            let eventosFiltrados = eventos.filter((evento) => evento.name.toLowerCase().includes(text.toLowerCase()) && categories.includes(evento.category))
            setEventoFiltrado(eventosFiltrados)
        } else if (text == "" && categories.length == 0) {
            setEventoFiltrado(eventos)
        } else if (text == "" && categories.length > 0) {
            let eventosFiltrados = eventos.filter((evento) => categories.includes(evento.category))
            setEventoFiltrado(eventosFiltrados)
        } else {
            let eventosFiltrados = eventos.filter((evento) => evento.name.toLowerCase().includes(text.toLowerCase()))
            setEventoFiltrado(eventosFiltrados)
        }
    }
   
    return (
        <>
            <center><h1>Todos los Eventos</h1></center>
            <div className="row right">
                <Checkbox filtrarEventos={eventos} setCategories={setCategories} />
                <Buscador filtrarEventos={filtrarEventos} />
            </div>
            <Cards eventos={eventoFiltrado} />
        </>
    )
}

export default Events