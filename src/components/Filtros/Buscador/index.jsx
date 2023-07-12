import React, { useRef } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Buscardor(props) {

    let inputRef = useRef()

    return (
        <>
            {
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        ref={inputRef}
                    />
                    <Button onClick={() => props.filtrarEventos(inputRef.current.value)} variant="success">Search</Button>
                </Form>
            }
        </>
    )
}

export default Buscardor