import React from "react";
import HeroEvent from "../components/HeroEvent";
import Helmet from "react-helmet";
import ContactSecond from "../components/ContactSecond";

const ContactPage = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us - Parampara 2k23</title>
            </Helmet>
            <HeroEvent name='Contact' message='We are here for You' />
            <ContactSecond />
        </>
    );
};

export default ContactPage;
