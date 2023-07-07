import { useState, useEffect } from "react"
import Cards from "../components/Cards"
import axios from "axios"

const Upcoming = () => {

    const [eventosFuturos, setEventosFuturos] = useState([])

    useEffect(() => {
        axios.get("https://mindhub-xj03.onrender.com/api/amazing")
          .then((response) => {
            
            let eventosFiltrados = response.data.events.filter((evento) => evento.date > response.data.currentDate)
            
            setEventosFuturos(eventosFiltrados);
          });
    }, []);

    return(
        <>
            <h1>Eventos Futuros</h1>
            <Cards eventos={eventosFuturos}/>
        </>
    )
}

export default Upcoming