import React, {useEffect, useState} from 'react';
import {Button, Offcanvas} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Navigator from "./Navigator";

const Menu = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [longMenu, setLongMenu] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 992) {
                setLongMenu(false);
                setShow(false);
            } else {
                setLongMenu(true);
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    if (longMenu)
        return (
            <>
                <div className="long-menu-container">
                    <div className="container-lg g-0">
                        <div className="row g-0">
                            <div className="col g-0">
                                <div className="long-menu">
                                    <Navigator activeItem = {props.activeItem}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    else
        return (
            <>
                <div className="menu-button">
                    <Button variant="secondary" onClick={handleShow}>
                        <FontAwesomeIcon icon={['fas', 'bars']}/>
                    </Button>
                </div>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton closeVariant={"white"}>
                        <Offcanvas.Title>
                            <img className="img-fluid" src={"/static/menutop.png"} alt="menu top"/>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Navigator activeItem = {props.activeItem}/>
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        );
}

export default Menu;