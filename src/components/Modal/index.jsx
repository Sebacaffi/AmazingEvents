import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function ModalDetails(props) {

    let evento = props.eventos

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="success" onClick={handleShow}>
                Revisar
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{evento.name}</Modal.Title>
                </Modal.Header>
                <center>
                    <Modal.Body>
                        <img width="400px" height="200px" src={evento.image} alt="" />
                        <p><strong>Nombre: </strong>{evento.name}</p>
                        <p><strong>Lugar: </strong>{evento.place}</p>
                        <p><strong>Categoría: </strong>{evento.category}</p>
                        <p><strong>Precio: </strong>${evento.price}</p>
                        <p><strong>Fecha: </strong>{evento.date}</p>
                    </Modal.Body>
                </center>
                <Modal.Footer>
                    <Link to={`/details/${evento._id}`} className="btn btn-success">Vista Completa</Link>
                    <Button variant="danger" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDetails;