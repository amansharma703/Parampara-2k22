import React, { useEffect, useState } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Aos from 'aos';
import '../../css/gallery.css';
import '../../css/gall.css';
const SportGallery = () => {
    const [galleryData, setGalleryData] = useState([]);
    const getData = async () => {
        const res = await fetch('https://parampara-48b01-default-rtdb.firebaseio.com/sportsgallery.json');
        const data = await res.json();
        setGalleryData(data);
    };
    useEffect(() => {
        getData();
        Aos.init();
    }, []);
    return (
        <>
            {galleryData.map((item, index) => {
                return (
                    <div
                        data-aos='fade-up'
                        data-aos-offset='400'
                        className='pics effect-hover figure col-12 col-md-4 col-sm-4 col-xs-12 pb-4'
                        key={index}
                    >
                        <LazyLoadImage src={item.img} effect='blur' style={{ width: '100%' }} />
                    </div>
                );
            })}
        </>
    );
};

export default SportGallery;
