import React from 'react';
import {Button, Col, Form, FormControl, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 text-center">
                            <span className="title1 font-weight-bold"> ACERCA DE ESTE SITIO </span>
                            <p className="text-left">
                                <strong>Ecuacción Legal</strong> es un sitio de asesoría jurídica para nacionales
                                y extranjeros que requieren de...
                            </p>
                        </div>
                        <div className="col-12 col-md-4 text-center">
                            <span className="title1 font-weight-bold"> MIS REDES SOCIALES </span>
                            <div>
                                <button className="btn btn-redsocial btn-youtube">
                                    <FontAwesomeIcon icon={["fab", "youtube-square"]} size="3x"/>
                                </button>
                                <button className="btn btn-redsocial btn-facebook">
                                    <FontAwesomeIcon icon={["fab", "facebook-square"]} size="3x"/>
                                </button>
                                <button className="btn btn-redsocial btn-twitter">
                                    <FontAwesomeIcon icon={["fab", "twitter-square"]} size="3x"/>
                                </button>
                            </div>
                            <div>
                                <span className="title1 font-weight-bold"> BOLETIN SEMANAL </span>
                                <p className="text-left">¡Subscríbete a mi boletín semanal y mantente al tanto de las
                                    últimas actualizaciones!</p>
                                <div>
                                    <Form>
                                        <Form.Group as={Row} className="mb-3">
                                            <Col sm={9}  className="g-3 g-sm-1">
                                                <FormControl type="text" placeholder="Correo Electrónico"
                                                         className="border-primary text-primary "/>
                                            </Col>
                                            <Col sm={3} className="g-1">
                                                <Button variant="secondary" className="px-5 px-sm-3"
                                                    style={{borderRadius: 20}}>Subscribirse</Button>
                                            </Col>
                                        </Form.Group>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 text-center">
                            <span className="title1 font-weight-bold"> INFORMACIÓN LEGAL </span>
                            <div className="legal-stuff">
                                <ul>
                                    <li>
                                        <a href="/">Términos y condiciones</a>
                                    </li>
                                    <li>
                                        <a href="/">Política de Privacidad</a>
                                    </li>
                                    <li>
                                        <a href="/">Responsabilidad legal</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="post-footer">
                        &copy; Tania Marianela Ichazo Cevallos - 2022 "EcuaAcciónLegal."
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;