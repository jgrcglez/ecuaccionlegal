import React, {useState} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {useNavigate} from "react-router-dom";

const Navigator = (props) => {
    const [activeKey, setActiveKey] = useState(props.activeItem);
    let navigate = useNavigate();

    const handleSelect = (eventKey) => {
        switch (eventKey) {
            case '1' :
                // setActiveKey(1);
                navigate("/");
                break;
            case '2' :
                // setActiveKey(2);
                navigate("/about/");
                break;
            case '3' :
                // setActiveKey(3);
                navigate("/blog/");
                break;
            default:
        }
    }

    return (
        <>
            <Navbar className="navbar-custom" sticky="top">
                {<Navbar.Brand href="/">
                    <img className="img-fluid" src={"/static/menutop.png"} alt="menu top"/>
                </Navbar.Brand>}
                <Nav className="ml-auto" activeKey={activeKey} onSelect={handleSelect}>
                    <Nav.Link eventKey={1}>Inicio</Nav.Link>
                    <Nav.Link eventKey={2}>Sobre Mi</Nav.Link>
                    <Nav.Link eventKey={3}>Blog Personal</Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
}

export default Navigator;