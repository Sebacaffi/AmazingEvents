import { useState, useEffect, useContext } from "react"
import StateContext from '../store/StateContext'
import Cards from "../components/Cards"
import Buscador from "../components/Filtros/Buscador"
import Checkbox from "../components/Filtros/CheckBox"
import './style.css'

const Upcoming = () => {

    let {eventosFuturos} = useContext(StateContext)

    const [eventoFuturoFiltrado, setEventoFuturoFiltrado] = useState(eventosFuturos)

    let [categories, setCategories] = useState([])

    useEffect(()=>{
        setEventoFuturoFiltrado(eventosFuturos)
    },[eventosFuturos])

    const filtrarEventos = (text) => {

        if(text != "" && categories.length > 0){
            let eventoFuturoFiltradoFN = eventosFuturos.filter((evento)=> evento.name.toLowerCase().includes(text.toLowerCase()) && categories.includes(evento.category))
            setEventoFuturoFiltrado(eventoFuturoFiltradoFN)
        }else if (text == "" && categories.length == 0){
            setEventoFuturoFiltrado(eventosFuturos)
        }else if(text == "" && categories.length > 0){
            let eventoFuturoFiltradoFN = eventosFuturos.filter((evento)=> categories.includes(evento.category))
            setEventoFuturoFiltrado(eventoFuturoFiltradoFN)
        }else{
            let eventoFuturoFiltradoFN = eventosFuturos.filter((evento)=> evento.name.toLowerCase().includes(text.toLowerCase()))
            setEventoFuturoFiltrado(eventoFuturoFiltradoFN)
        }
    }

    return (
        <>
            <center><h1>Eventos Futuros</h1></center>
            <div className="row right">
                <Checkbox filtrarEventos={eventosFuturos} setCategories={setCategories} />
                <Buscador filtrarEventos={filtrarEventos} />
            </div>
            <Cards eventos={eventoFuturoFiltrado} />
        </>
    )
}

export default Upcoming