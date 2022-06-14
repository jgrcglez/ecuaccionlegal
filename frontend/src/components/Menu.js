import React, {useState} from 'react';
import {Button, Offcanvas} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Menu = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="menu-button">
                <Button variant="secondary" onClick={handleShow} >
                    <FontAwesomeIcon icon={['fas', 'bars']}/>
                </Button>
            </div>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Menu;