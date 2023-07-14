import { useState } from "react";
import StateContext from "./StateContext"

const StateProvider = ({children}) => {

    let [eventos, setEventos] = useState([])

    let [eventosPasados, setEventosPasados] = useState([])

    let [eventosFuturos, setEventosFuturos] = useState([])

    let [evento, setEvento] = useState({
        "_id": 0,
        "name": "",
        "category": "",
        "date": "",
        "description": "",
        "image": "",
        "place": "",
        "price": 0,
        "capacity": 0,
        "assistance": 0
    })
    
    const getEventos = () => {
        return initialState.eventos.map(evento => evento)
    }

    const addEvento = (evento) => {
        setEvento([...initialState.eventos, evento])
    }

    const loadEventos = (eventos) => {
        setEventos(eventos)
    }

    const loadEventosPasados = (eventosPasados) => {
        setEventosPasados(eventosPasados)
    }

    const loadEventosFuturos = (eventosFuturos) => {
        setEventosFuturos(eventosFuturos)
    }

    const initialState = {
        eventos,
        eventosPasados,
        eventosFuturos,
        evento,
        getEventos,
        addEvento,
        loadEventos,
        loadEventosPasados,
        loadEventosFuturos
    }

    return (

        <StateContext.Provider value={initialState}>
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider