import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {

    const [eventos, setEventos] = useState([])

    useEffect(() => {
        axios.get("https://mindhub-xj03.onrender.com/api/amazing")
            .then((response) => {
                setEventos(response.data.events);
            });
    }, []);
    
    return (
        <>
            <Carousel>
                {
                    eventos.map((evento) => {
                        return <div key={evento._id}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={evento.image}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>{evento.name}</h3>
                                    <p>{evento.description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </div>
                    })
                }
            </Carousel>
        </>
    )
}

export default Home