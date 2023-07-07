import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ModalDetails from '../Modal';

const Cards = (props) =>{

    let eventos = props.eventos

    return(
        <> 
            <div className="container">
                <div className="row">
            { 
                eventos.map((evento)=>{
                return <div key={evento.name}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img width="400px" height="200px" variant="top" src={evento.image} />
                        <Card.Body>
                        <Card.Title>{evento.name}</Card.Title>
                        <Card.Text>Lugar: {evento.place}</Card.Text>
                        <Card.Text>Valor: ${evento.price}</Card.Text>
                        <Card.Text>Fecha: {evento.date}</Card.Text>
                        <center><ModalDetails eventos={evento}/></center>
                        </Card.Body>
                        </Card>
                    </div>  
                })
            }
            </div>  
            </div>  
        </>
    )
}

export default Cards