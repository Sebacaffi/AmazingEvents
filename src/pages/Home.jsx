import { useState, useEffect } from "react"
import Cards from "../components/Cards"
import Buscador from "../components/Filtros/Buscador"
import axios from "axios"
import Checkbox from "../components/Filtros/CheckBox"

const Home = () => {

    const [eventos, setEventos] = useState([])

    useEffect(() => {
        axios.get("https://mindhub-xj03.onrender.com/api/amazing")
          .then((response) => {
            setEventos(response.data.events);
            setEventoFiltrado(response.data.events)
          });
    }, []);

    const [eventoFiltrado, setEventoFiltrado] = useState(eventos)

    const filtrarEventos = (text) => {

        if(text != ""){
            let eventosFiltrados = eventos.filter((evento)=> evento.name == text)
            setEventoFiltrado(eventosFiltrados)
        }else{
            setEventoFiltrado(eventos)
        }
    }

    return(
        <>  
            <center><h1>Todos los Eventos</h1></center>
            <div className="row">
                <Checkbox filtrarEventos={eventos}/>
                <Buscador filtrarEventos={filtrarEventos}/>
            </div>
            <Cards eventos={eventoFiltrado}/>
        </>
    )
}

export default Home