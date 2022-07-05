import React from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Carousel} from "react-bootstrap";

const Banner = () => {
    return (
        <div className="container-lg g-0">
            <div className="row g-0">
                <div className="col g-0">
                    <Carousel variant="dark" interval={2500}>
                        <Carousel.Item>
                            <picture>
                                <source media={"(max-width:650px)"} srcSet={"static/slide1.jpg"}/>
                                <img
                                    className="d-block w-100"
                                    src={"static/slide1-l.jpg"}
                                    alt="First slide"
                                />
                            </picture>
                        </Carousel.Item>
                        <Carousel.Item>
                            <picture>
                                <source media={"(max-width:650px)"} srcSet={"static/slide2.jpg"}/>
                                <img
                                    className="d-block w-100"
                                    src={"static/slide2-l.jpg"}
                                    alt="First slide"
                                />
                            </picture>
                        </Carousel.Item>
                        <Carousel.Item>
                            <picture>
                                <source media={"(max-width:650px)"} srcSet={"static/slide3.jpg"}/>
                                <img
                                    className="d-block w-100"
                                    src={"static/slide3-l.jpg"}
                                    alt="First slide"
                                />
                            </picture>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>

    );
}

export default Banner;