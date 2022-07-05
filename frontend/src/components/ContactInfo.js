import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const ContactInfo = () => {
    return (
        <section className="contact-info-container">
            <div className="container-lg">
                <div className="row">
                    <div className="col info">
                        <div>
                            <FontAwesomeIcon icon={['fas', "location-pin"]}/>
                            <span className="contact-header"> Dirección: </span>
                            <span className="contact-info">Ruta Spondilus #678</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={['fas', "phone"]}/>
                            <span className="contact-header"> Llámenos al: </span>
                            <span className="contact-info">+50958288175</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={['fas', "envelope"]}/>
                            <span className="contact-header"> Correo electrónico: </span>
                            <span className="contact-info">jgrcglez@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactInfo;