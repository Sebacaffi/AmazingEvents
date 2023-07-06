import { useState, useEffect } from "react"
import Cards from "../components/Cards"
import axios from "axios"

const Past = () => {

    const [eventosPasados, setEventosPasados] = useState([])

    useEffect(() => {
        axios.get("https://mindhub-xj03.onrender.com/api/amazing")
          .then((response) => {
            
            let eventosFiltrados = response.data.events.filter((evento) => evento.date < response.data.currentDate)
            
            setEventosPasados(eventosFiltrados);
          });
    }, []);

    return(
        <>
            <h1>Eventos Pasados</h1>
            <Cards eventos={eventosPasados}/>
        </>
    )
}

export default Past