import { useState, useEffect, useContext } from "react"
import StateContext from '../store/StateContext'
import Cards from "../components/Cards"
import Buscador from "../components/Filtros/Buscador"
import Checkbox from "../components/Filtros/CheckBox"
import './style.css'

const Past = () => {

    let {eventosPasados} = useContext(StateContext)

    const [eventoPasadoFiltrado, setEventoPasadoFiltrado] = useState(eventosPasados)

    let [categories, setCategories] = useState([])

    useEffect(()=>{
        setEventoPasadoFiltrado(eventosPasados)
    },[eventosPasados])

    const filtrarEventos = (text) => {

        if(text != "" && categories.length > 0){
            let eventoPasadoFiltradoFN = eventosPasados.filter((evento)=> evento.name.toLowerCase().includes(text.toLowerCase()) && categories.includes(evento.category))
            setEventoPasadoFiltrado(eventoPasadoFiltradoFN)
        }else if (text == "" && categories.length == 0){
            setEventoPasadoFiltrado(eventosPasados)
        }else if(text == "" && categories.length > 0){
            let eventoPasadoFiltradoFN = eventosPasados.filter((evento)=> categories.includes(evento.category))
            setEventoPasadoFiltrado(eventoPasadoFiltradoFN)
        }else{
            let eventoPasadoFiltradoFN = eventosPasados.filter((evento)=> evento.name.toLowerCase().includes(text.toLowerCase()))
            setEventoPasadoFiltrado(eventoPasadoFiltradoFN)
        }
    }

    return(
        <>
            <center><h1>Eventos Pasados</h1></center>
            <div className="row right">
                <Checkbox filtrarEventos={eventosPasados} setCategories={setCategories} />
                <Buscador filtrarEventos={filtrarEventos}/>
            </div>
            <Cards eventos={eventoPasadoFiltrado}/>
        </>
    )
}

export default Past