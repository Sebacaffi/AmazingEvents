import React, { useEffect, useRef } from "react";
import "./style.css";
import axios from "axios";
import Swal from 'sweetalert2'

const Login = () => {

  let emailRef = useRef()
  let passRef = useRef()

  const loginCustomer = (event) => {
    event.preventDefault()
    axios.defaults.withCredentials = true
    axios.post("http://localhost:3000/api/login", { email: emailRef.current.value, password: passRef.current.value })
      .then(response => {
        window.location.href = "/events"
        localStorage.setItem('isLoggedIn', 'true');
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Usuario o contraseña incorrectos',
        });
      })
  }

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={(e) => loginCustomer(e)}>
        <h2>Iniciar sesión</h2>
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
        <button variant="success">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;