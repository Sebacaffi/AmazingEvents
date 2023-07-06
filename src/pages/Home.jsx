import { useState, useEffect } from "react"
import Cards from "../components/Cards"
import axios from "axios"

const Home = () => {

    const [eventos, setEventos] = useState([])

    useEffect(() => {
        axios.get("https://mindhub-xj03.onrender.com/api/amazing")
          .then((response) => {
            setEventos(response.data.events);
          });
    }, []);

    return(
        <>
            <h1>Todos los Eventos</h1>
            <Cards eventos={eventos}/>
        </>
    )
}

export default Home