import React from 'react';
import ContactInfo from "../components/ContactInfo";
import Menu from "../components/Menu";

const HomePage = () => {
    return (
        <>
            <ContactInfo/>
            <Menu activeItem={2}/>
            <h1>ABOUT</h1>
        </>
    );
}

export default HomePage;