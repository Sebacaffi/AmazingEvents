import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Navegate = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logoutCustomer = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    useEffect(() => {
        const loggedInFlag = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(loggedInFlag === 'true');
    }, []);

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
                            </Nav>
                            <Nav className="ms-auto">
                                {isLoggedIn && (
                                    <Link className="nav-link" to={"/logout"}>
                                        <Button variant="danger" onClick={logoutCustomer}>Cerrar Sesión</Button>
                                    </Link>
                                )}
                                {!isLoggedIn && (
                                    <Link className="nav-link" to={"/login"}>
                                        <Button variant="success">Iniciar Sesión</Button>
                                    </Link>
                                )}
                                {!isLoggedIn && (
                                    <Link className="nav-link" to={"/register"}>
                                        <Button variant="primary">Registrarse</Button>
                                    </Link>
                                )}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            }
        </>
    )
}

export default Navegate;
