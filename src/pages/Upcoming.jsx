import { useState, useEffect } from "react"
import Cards from "../components/Cards"
import Buscador from "../components/Filtros/Buscador"
import axios from "axios"

const Upcoming = () => {

    const [eventosFuturos, setEventosFuturos] = useState([])

    useEffect(() => {
        axios.get("https://mindhub-xj03.onrender.com/api/amazing")
          .then((response) => {

            let eventosFiltrados = response.data.events.filter((evento) => evento.date > response.data.currentDate)

            setEventosFuturos(eventosFiltrados)
            setEventoFuturoFiltrado(eventosFiltrados)
          });
    }, []);

    const [eventoFuturoFiltrado, setEventoFuturoFiltrado] = useState(eventosFuturos)

    const filtrarEventos = (text) => {

        if(text != ""){
            let eventoFuturoFiltradoFN = eventosFuturos.filter((evento)=> evento.name == text)
            setEventoFuturoFiltrado(eventoFuturoFiltradoFN)
        }else{
            setEventoFuturoFiltrado(eventosFuturos)
        }
    }

    return(
        <>
            <center><h1>Eventos Futuros</h1></center>
            <div className="row">
                <Checkbox filtrarEventos={eventos}/>
                <Buscador filtrarEventos={filtrarEventos}/>
            </div>
            <Cards eventos={eventoFuturoFiltrado}/>
        </>
    )
}

export default Upcoming