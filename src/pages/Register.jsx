import React, { useRef } from "react";
import Form from 'react-bootstrap/Form';
import "./style.css";
import axios from "axios";
import Swal from 'sweetalert2'

const Register = () => {
    let userRef = useRef()
    let emailRef = useRef()
    let rolRef = useRef()
    let passRef = useRef()

    const registerCustomer = (event) => {
        event.preventDefault()
        axios.defaults.withCredentials = true
        axios.post("http://localhost:3000/api/customers", { user: userRef.current.value, email: emailRef.current.value, password: passRef.current.value, rol: rolRef.current.value })
            .then(response => {
                window.location.href = "/login"
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error al registrar usuario, revise los datos',
                });
            })
    }

    return (
        <div className="login-page">
            <form className="login-form" onSubmit={(e) => registerCustomer(e)}>
                <h2>Registro Customer</h2>
                <div className="form-group">
                    <label htmlFor="username">User</label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        ref={emailRef}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        ref={passRef}
                        required
                    />
                </div>
                <Form.Group className="mb-3" controlId="formBasicRol">
                    <Form.Label>Rol</Form.Label><br />
                    <Form.Select aria-label="Default select example" style={{ width: '150px' }} ref={rolRef}>
                        <option value="basico">Basico</option>
                        <option value="admin">Admin</option>
                        <option value="test">Test</option>
                    </Form.Select>
                </Form.Group>
                <button variant="success">Iniciar sesión</button>
            </form>
        </div>
    );
};

export default Register;