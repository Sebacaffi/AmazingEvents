import { useState, useEffect } from "react"
import Table from 'react-bootstrap/Table';
import axios from "axios"

const Stats = () => {

    const [eventos, setEventos] = useState([])

    let mayorAsistencia = 0
    let menorAsistencia = 101
    let mayorCapacidad = 0

    let ObjtMayorAsistencia = {}
    let ObjtMenorAsistencia = {}
    let ObjtMayorCapacidad = {}

    useEffect(() => {
        axios.get("https://mindhub-xj03.onrender.com/api/amazing")
            .then((response) => {
                setEventos(response.data.events);
            });
    }, []);

    let eventosStats = eventos.filter((evento) => {

        if ((evento.assistance * 100 / evento.capacity) > mayorAsistencia) {
            mayorAsistencia = evento.assistance * 100 / evento.capacity
            ObjtMayorAsistencia.asistencia = mayorAsistencia
            ObjtMayorAsistencia.name = evento.name
        }

        if ((evento.assistance * 100 / evento.capacity) < menorAsistencia) {
            menorAsistencia = evento.assistance * 100 / evento.capacity
            ObjtMenorAsistencia.asistencia = menorAsistencia
            ObjtMenorAsistencia.name = evento.name
        }

        if (evento.capacity > mayorCapacidad) {
            mayorCapacidad = evento.capacity
            ObjtMayorCapacidad.capacity = mayorCapacidad
            ObjtMayorCapacidad.name = evento.name
        }
    })

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th colSpan={3}>Estadisticas Eventos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Evento MAYOR asistencia</td>
                        <td>Evento MENOR asistencia</td>
                        <td>Evento MAYOR capacidad</td>
                    </tr>
                    <tr>
                        <td><strong>{ObjtMayorAsistencia.name}</strong> con {ObjtMayorAsistencia.asistencia}% </td>
                        <td><strong>{ObjtMenorAsistencia.name}</strong> con {ObjtMenorAsistencia.asistencia}% </td>
                        <td><strong>{ObjtMayorCapacidad.name}</strong> con {ObjtMayorCapacidad.capacity} de personas</td>
                    </tr>
                </tbody>
            </Table>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th colSpan={3}>Eventos Futuros por categoría</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Categoría</td>
                        <td>Ingresos</td>
                        <td>Porcentaje asistencia</td>
                    </tr>
                </tbody>
            </Table>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th colSpan={3}>Eventos Pasados por categoría</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Categoría</td>
                        <td>Ingresos</td>
                        <td>Porcentaje asistencia</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default Stats