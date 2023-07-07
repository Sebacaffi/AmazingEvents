import Form from 'react-bootstrap/Form';

const Checkbox = (props) => {

    let eventos = props.filtrarEventos

    let categorias = []
    eventos.forEach((evento) => {
         if (!categorias.includes(evento.category)) {
             categorias.push(evento.category)
         }
    })

    return(
        <>
            {
                categorias.map((categoria)=>{
                    return <div key={categoria} className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label">
                            {categoria}
                        </label>
                    </div>
                })
            }
        </>
    )
}

export default Checkbox