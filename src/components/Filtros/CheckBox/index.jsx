import React, { useState } from 'react';

const Checkbox = (props) => {

    const { filtrarEventos } = props;
    const [selectedCategories, setSelectedCategories] = useState([]);

    let categorias = [];
    filtrarEventos.forEach((evento) => {
        if (!categorias.includes(evento.category)) {
            categorias.push(evento.category);
        }
    });

    const handleCheckboxChange = (categoria) => {
        if (selectedCategories.includes(categoria)) {
            setSelectedCategories(selectedCategories.filter((cat) => cat !== categoria));
        } else {
            setSelectedCategories([...selectedCategories, categoria]);
        }
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
                            checked={selectedCategories.includes(categoria)}
                            onChange={() => handleCheckboxChange(categoria)}
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