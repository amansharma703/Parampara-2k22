import React from 'react';
import Gallery from '../components/Gallery';
import HeroSlider from '../components/HeroSlider';

const GalleryPage = () => {
    return (
        <>
            <HeroSlider name='Gallery' message='We Capture your all Precious Moment here' />
            <Gallery />
        </>
    );
};

export default GalleryPage;
