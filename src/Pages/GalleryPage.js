import React from 'react';
import Gall from '../components/Gall';
import Gallery from '../components/Gallery';
import HeroGallery from '../components/HeroGallery';
import HeroSlider from '../components/HeroSlider';

const GalleryPage = () => {
    return (
        <>
            {/* <HeroSlider name='Gallery' message='We Capture your all Precious Moment here' /> */}
            <HeroGallery name='Gallery' message='We Capture your all Precious Moment here' />
            <Gallery />
            <Gall />
        </>
    );
};

export default GalleryPage;
