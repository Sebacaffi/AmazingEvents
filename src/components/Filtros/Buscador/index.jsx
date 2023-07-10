import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Buscardor(props) {

    let text = ""

    return (
        <>
            {
                <Form className="d-flex">
                    <Form.Control
                        onChange={(event) => text = event.target.value}
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button onClick={() => props.filtrarEventos(text)} variant="success">Search</Button>
                </Form>
            }
        </>
    )
}

export default Buscardor