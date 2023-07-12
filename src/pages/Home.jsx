import Carousel from 'react-bootstrap/Carousel';

const Home = () => {

    return (
        <>  
            <center>
                <h1>Bienvenido a Amazing Events</h1>
                <h5>tu página de eventos de confianza</h5>
            </center>
            <Carousel className='container'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_960_720.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2021/11/14/18/29/buffet-6795417_960_720.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_960_720.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2021/08/14/01/58/museum-6544420_960_720.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_960_720.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2017/07/13/23/11/cinema-2502213_960_720.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2016/10/17/16/35/concert-1748102_960_720.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2019/08/09/06/12/car-racing-4394450_960_720.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Home