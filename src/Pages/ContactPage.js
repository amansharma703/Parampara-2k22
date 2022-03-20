import React from 'react';
import Contact from '../components/Contact';
import Gallery from '../components/Gallery';
import HeroEvent from '../components/HeroEvent';
import Helmet from 'react-helmet';
import ContactSecond from '../components/ContactSecond';

const ContactPage = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us - Parampara 2k22</title>
            </Helmet>
            <HeroEvent name='Contact' message='We are here for You' />
            <ContactSecond />
            {/* <Contact /> */}
        </>
    );
};

export default ContactPage;
