import React from "react";
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navegate = (props) => {

    let text = ""

    return (
        <>
            {
                <Navbar bg="dark" expand="lg" className="navbar navbar-dark bg-dark">
                    <Container fluid>
                        <Navbar.Brand href="#">Amazing Events</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Link className="nav-link" to={"/"}>Inicio</Link>
                                <Link className="nav-link" to={"/events"}>Eventos</Link>
                                <Link className="nav-link" to={"/past"}>Eventos Pasados</Link>
                                <Link className="nav-link" to={"/upcoming"}>Eventos Futuros</Link>
                                <Link className="nav-link" to={"/stats"}>Estadisticas</Link>
                                <Link className="nav-link" to={"*"}></Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            }
        </>
    )
}

export default Navegate