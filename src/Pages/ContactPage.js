import React from 'react';
import Contact from '../components/Contact';
import HeroSlider from '../components/HeroSlider';
import Gallery from '../components/Gallery';
import HeroEvent from '../components/HeroEvent';
import Helmet from 'react-helmet';

const ContactPage = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us - Parampara 2k22</title>
            </Helmet>
            <HeroEvent name='Contact' message='We are here for You' />
            <Contact />
        </>
    );
};

export default ContactPage;
