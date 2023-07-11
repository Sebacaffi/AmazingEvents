import { useState, useEffect } from "react"
import Cards from "../components/Cards"
import Buscador from "../components/Filtros/Buscador"
import Checkbox from "../components/Filtros/CheckBox"
import './style.css'
import axios from "axios"

const Upcoming = () => {

    const [eventosFuturos, setEventosFuturos] = useState([])

    const [eventoFuturoFiltrado, setEventoFuturoFiltrado] = useState(eventosFuturos)

    let [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get("https://mindhub-xj03.onrender.com/api/amazing")
            .then((response) => {

                let eventosFiltrados = response.data.events.filter((evento) => evento.date > response.data.currentDate)

                setEventosFuturos(eventosFiltrados)
                setEventoFuturoFiltrado(eventosFiltrados)
            });
    }, []);

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