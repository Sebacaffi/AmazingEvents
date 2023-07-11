import Table from 'react-bootstrap/Table';

const Stats = () => {
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