import React, { useEffect, useState } from 'react';

const Checkbox = (props) => {

    const { filtrarEventos } = props;

    let namesCategoriasChecked = []

    let categorias = [];
    filtrarEventos.forEach((evento) => {
        if (!categorias.includes(evento.category)) {
            categorias.push(evento.category);
        }
    });

    const handleCheckboxChange = event => {
        let checkboxesChecked = document.querySelectorAll("input[type=checkbox]:checked")
        let arrCheckboxesChecked = Array.from(checkboxesChecked)

        namesCategoriasChecked = arrCheckboxesChecked.map((checkbox) => checkbox.value)
        
        props.setCategories(namesCategoriasChecked)
    };

    return (
        <>
            <div>
                {categorias.map((categoria) => (
                    <div key={categoria} className="form-check form-check-inline check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={categoria}
                            id={categoria}
                            onClick={handleCheckboxChange}
                        />
                        <label className="form-check-label" htmlFor={categoria}>
                            {categoria}
                        </label>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Checkbox;