import Card from 'react-bootstrap/Card';
import ModalDetails from '../Modal';
import { BsFillCalendar2DateFill, BsCashCoin, BsFillPinMapFill } from "react-icons/bs";
import './style/style.css'


const Cards = (props) => {

    let eventos = props.eventos

    return (
        <>
            <div className='card-container'>
                <div className="row">
                    {
                        eventos.map((evento) => {
                            return <div key={evento.name}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img width="400px" height="200px" variant="top" src={evento.image} />
                                    <Card.Body>
                                        <Card.Title>{evento.name}</Card.Title>
                                        <Card.Text><BsFillPinMapFill/> {evento.place}</Card.Text>
                                        <Card.Text><BsCashCoin/> {evento.price}</Card.Text>
                                        <Card.Text><BsFillCalendar2DateFill/> {evento.date}</Card.Text>
                                        <center><ModalDetails eventos={evento} /></center>
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