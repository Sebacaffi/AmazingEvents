import { useState, useEffect } from "react"
import Cards from "../components/Cards"
import Buscador from "../components/Filtros/Buscador"
import Checkbox from "../components/Filtros/CheckBox"
import './style.css'
import axios from "axios"

const Past = () => {

    const [eventosPasados, setEventosPasados] = useState([])

    const [eventoPasadoFiltrado, setEventoPasadoFiltrado] = useState(eventosPasados)

    let [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get("https://mindhub-xj03.onrender.com/api/amazing")
          .then((response) => {

            let eventosFiltrados = response.data.events.filter((evento) => evento.date < response.data.currentDate)

            setEventosPasados(eventosFiltrados)
            setEventoPasadoFiltrado(eventosFiltrados)
          });
    }, []);

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