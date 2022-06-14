import React from 'react';
import ContactInfo from "../components/ContactInfo";
import Banner from "../components/Banner";
import Menu from "../components/Menu";

const HomePage = () => {
    return (
        <>
            <Menu />
            <ContactInfo/>
            <Banner/>
        </>
    );
}

export default HomePage;