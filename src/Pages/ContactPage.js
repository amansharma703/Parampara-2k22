import React from 'react';
import Contact from '../components/Contact';
import HeroSlider from '../components/HeroSlider';
import Gallery from '../components/Gallery';

const ContactPage = () => {
    return (
        <>
            <HeroSlider name='Contact' message='We are here for You' />
            <Contact />
        </>
    );
};

export default ContactPage;
