import React from "react";

function Buscardor(props){

    let text = ""

    return(
        <>
            <div>
                <label htmlFor="">
                    <input type="text" onChange={(event)=> text = event.target.value} />
                </label>
    
                <input onClick={()=>props.filtrarEventos(text)} type="button" value = "Buscar" />
            </div>
        </>
    )
}

export default Buscardor