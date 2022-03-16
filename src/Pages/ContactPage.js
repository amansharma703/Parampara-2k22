import React from 'react';
import Contact from '../components/Contact';
import HeroSlider from '../components/HeroSlider';
import Gallery from '../components/Gallery';
import HeroEvent from '../components/HeroEvent';

const ContactPage = () => {
    return (
        <>
            <HeroEvent name='Contact' message='We are here for You' />
            <Contact />
        </>
    );
};

export default ContactPage;
