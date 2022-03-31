import '../css/gallery.css';
import '../css/gall.css';
import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import TechGallery from './galleryEvent/TechGallery';
import CulturalGallery from './galleryEvent/CulturalGallery';
import SportGallery from './galleryEvent/SportGallery';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
    const [tech, setTech] = useState(false);
    const [cultural, setCultural] = useState(false);
    const [sports, setSports] = useState(false);

    const changeGallery = (val) => {
        if (val === 'all') {
            setTech(false);
            setCultural(false);
            setSports(false);
        } else if (val === 'tech') {
            setTech(true);
            setCultural(false);
            setSports(false);
        } else if (val === 'cultural') {
            setCultural(true);
            setTech(false);
            setSports(false);
        } else if (val == 'sports') {
            setSports(true);
            setTech(false);
            setCultural(false);
        }
    };

    return (
        <>
            <div className='container pt-4'>
                <div className='container'>
                    <div className='row  mt-xs-20'>
                        <div className='col-md-12 text-center'>
                            <h1>
                                Parampara <b>Gallery</b>
                            </h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className=' text-center '>
                            <p> Parampara Events Gallery </p>
                        </div>
                    </div>
                </div>
                <div className='pb-4'>
                    <ul class='filter text-center mt-2 '>
                        <li onClick={() => changeGallery('all')}>All Highlights</li>
                        <li onClick={() => changeGallery('tech')}>Technical</li>
                        <li onClick={() => changeGallery('cultural')}>Cultural</li>
                        <li onClick={() => changeGallery('sports')}>Sports</li>
                    </ul>
                </div>
                <div className='container  '>
                    <div className='row'>
                        {!tech && !cultural && !sports ? (
                            <>
                                <TechGallery />
                                <CulturalGallery />
                                <SportGallery />
                            </>
                        ) : undefined}

                        {tech ? <TechGallery /> : undefined}
                        {cultural ? <CulturalGallery /> : undefined}
                        {sports ? <SportGallery /> : undefined}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery;
