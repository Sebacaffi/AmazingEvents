import { useState, useEffect } from "react"
import Cards from "../components/Cards"
import Buscador from "../components/Filtros/Buscador"
import Checkbox from "../components/Filtros/CheckBox"
import './style.css'
import axios from "axios"

const Events = () => {

    const [eventos, setEventos] = useState([])

    const [eventoFiltrado, setEventoFiltrado] = useState(eventos)

    let [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get("https://mindhub-xj03.onrender.com/api/amazing")
            .then((response) => {
                setEventos(response.data.events);
                setEventoFiltrado(response.data.events)
            });
    }, []);

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