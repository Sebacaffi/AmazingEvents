import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios"

const Details = () => {

    const params = useParams()

    const [eventos, setEventos] = useState([])

    useEffect(() => {
        axios.get("https://mindhub-xj03.onrender.com/api/amazing")
            .then((response) => {
                setEventos(response.data.events);
            });
    }, []);

    let eventoFiltradoID = eventos.find((evento) => evento._id == params.id)

    if (eventoFiltradoID != undefined) {
        return (
            <>
                <div className="card mb-3" style={{maxwidth: '540px'}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={eventoFiltradoID.image} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{eventoFiltradoID.name}</h5>
                                <p className="card-text"><strong>Descripción: </strong>{eventoFiltradoID.description}</p>
                                <p className="card-text"><strong>Fecha: </strong>{eventoFiltradoID.date}</p>
                                <p className="card-text"><strong>Lugar: </strong>{eventoFiltradoID.place}</p>
                                <p className="card-text"><strong>Precio: </strong>{eventoFiltradoID.price}</p>
                                <p className="card-text"><strong>Capacidad: </strong>{eventoFiltradoID.capacity}</p>
                                {eventoFiltradoID.assistance ? <p><strong>Asistencia: </strong>{eventoFiltradoID.assistance}</p> : <p><strong>Estimación: </strong>{eventoFiltradoID.estimate}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Details