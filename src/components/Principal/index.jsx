import React, { useState } from "react";
import Buscardor from "../Filtros/Buscador";

const Principal = () => {

    let [eventos, setEventos] = useState([{name: "Metallica", pais: "USA"},
    {name: "Los Bunkers", pais: "Chile"},
    {name: "Oasis", pais: "Inglaterra"}])

    let [eventosFiltrados, setEventosFiltrados] = useState(eventos)

    const filtrarEventos = (text) => {
    
        let eventosFiltradosTexto = eventos.filter((evento) => evento.name == text)

        if(text == ""){
            setEventosFiltrados(eventos)
        }else{
            setEventosFiltrados(eventosFiltradosTexto)
        }
    }

    return(
        <>
            {
                eventosFiltrados.map((evento)=>{
                    return <div key={evento.name}>
                        <p>{evento.name}</p>
                        <p>{evento.pais}</p>
                    </div>
                })
            }
            <Buscardor filtrarEventos = {filtrarEventos}/>
        </>
    )
}

export default Principal