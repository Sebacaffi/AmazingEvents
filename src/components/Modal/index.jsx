import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalDetails(props) {

    let evento = props.eventos

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <> 
            <Button variant="primary" onClick={handleShow}>
                Ver Detalles
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>{evento.name}</Modal.Title>
                </Modal.Header>
                    <center>
                        <Modal.Body>
                            <img width="400px" height="200px"src={evento.image} alt="" />
                            <p><strong>Nombre: </strong>{evento.name}</p>
                            <p><strong>Lugar: </strong>{evento.place}</p>
                            <p><strong>Categoría: </strong>{evento.category}</p>
                            <p><strong>Lugar: </strong>{evento.place}</p>
                            <p><strong>Precio: $</strong>{evento.price}</p>
                            <p><strong>Fecha: </strong>{evento.date}</p>
                            <p><strong>Capacidad: </strong>{evento.capacity}</p>
                            {evento.assistance ? <p><strong>Asistencia: </strong>{evento.assistance}</p>: <p><strong>Estimación: </strong>{evento.estimate}</p>}
                        </Modal.Body>
                    </center>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDetails;