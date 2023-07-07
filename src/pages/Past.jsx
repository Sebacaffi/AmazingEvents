import { useState, useEffect } from "react"
import Cards from "../components/Cards"
import Buscador from "../components/Filtros/Buscador"
import axios from "axios"

const Past = () => {

    const [eventosPasados, setEventosPasados] = useState([])

    useEffect(() => {
        axios.get("https://mindhub-xj03.onrender.com/api/amazing")
          .then((response) => {

            let eventosFiltrados = response.data.events.filter((evento) => evento.date < response.data.currentDate)

            setEventosPasados(eventosFiltrados)
            setEventoPasadoFiltrado(eventosFiltrados)
          });
    }, []);

    const [eventoPasadoFiltrado, setEventoPasadoFiltrado] = useState(eventosPasados)

    const filtrarEventos = (text) => {

        if(text != ""){
            let eventoPasadoFiltradoFN = eventosPasados.filter((evento)=> evento.name == text)
            setEventoPasadoFiltrado(eventoPasadoFiltradoFN)
        }else{
            setEventoPasadoFiltrado(eventosPasados)
        }
    }

    return(
        <>
            <center><h1>Eventos Pasados</h1></center>
            <div className="row">
                <Checkbox filtrarEventos={eventos}/>
                <Buscador filtrarEventos={filtrarEventos}/>
            </div>
            <Cards eventos={eventoPasadoFiltrado}/>
        </>
    )
}

export default Past