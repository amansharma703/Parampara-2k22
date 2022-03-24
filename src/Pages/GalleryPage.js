import React from 'react';
import Gall from '../components/Gall';
import Gallery from '../components/Gallery';
import HeroGallery from '../components/HeroGallery';
import Helmet from 'react-helmet';
import VideoGallery from '../components/VideoGallery';

const GalleryPage = () => {
    return (
        <>
            <Helmet>
                <title>Gallery - Parampara 2k22</title>
            </Helmet>
            <HeroGallery name='Gallery' message='We Capture your all Precious Moment here' />
            <Gallery />
            <VideoGallery />
            <Gall />
        </>
    );
};

export default GalleryPage;
