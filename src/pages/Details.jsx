import { useParams } from "react-router-dom"
import { useContext } from "react"
import StateContext from '../store/StateContext'

import Card from 'react-bootstrap/Card';

const Details = () => {

    const params = useParams()

    let { eventos } = useContext(StateContext)

    let eventoFiltradoID = eventos.find((evento) => evento._id == params.id)

    if (eventoFiltradoID != undefined) {
        return (
            <>
                <center>
                    <Card style={{ width: '60rem', height: '100%', flexDirection: 'row', backgroundColor: '#FAF9F8' }}>
                        <Card.Img variant="top" style={{ width: '500px' }} src={eventoFiltradoID.image} />
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'Russo One', }}>{eventoFiltradoID.name}</Card.Title>
                            <Card.Text>{eventoFiltradoID.description}</Card.Text>
                            <p><b>Categoria :</b> {eventoFiltradoID.category}</p>
                            <p><b>Fecha :</b> {eventoFiltradoID.date}</p>
                            <p><b>Lugar :</b> {eventoFiltradoID.place}</p>
                            <p><b>Precio :</b> {eventoFiltradoID.price}</p>
                            <p><b>Capacidad : </b> {eventoFiltradoID.capacity}</p>
                            <p>{eventoFiltradoID.assistance ? <label><b>Asistencia: </b>{eventoFiltradoID.assistance}</label> : <label><b>Estimacion: </b>{eventoFiltradoID.estimate}</label>}</p>
                        </Card.Body>
                    </Card>
                </center>
            </>
        )
    }
}

export default Details