import React from 'react';
import ContactInfo from "../components/ContactInfo";
import Banner from "../components/Banner";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <>
            <ContactInfo/>
            <Menu activeItem={1}/>
            <Banner/>
            <Footer/>
        </>
    );
}

export default HomePage;