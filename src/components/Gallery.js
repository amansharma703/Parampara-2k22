import '../css/gallery.css';
import '../css/gall.css';
import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
    const [galleryData, setGalleryData] = useState([]);
    const getData = async () => {
        const res = await fetch('https://parampara-48b01-default-rtdb.firebaseio.com/gallery.json');
        const data = await res.json();
        setGalleryData(data);
        console.log(data);
    };
    useEffect(() => {
        getData();
        Aos.init();
    }, []);
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
                        <div className=' text-center mb-30 mt-xs-10'>
                            <p> Parampara Events Gallery </p>
                        </div>
                    </div>
                </div>
                <div className='gallery px-5'>
                    {galleryData.map((item, index) => {
                        return (
                            <div
                                data-aos='fade-up'
                                data-aos-offset='100'
                                className='pics effect-hover figure'
                                key={index}
                                // onClick={() => {
                                //     getImg(item.imgSrc);
                                // }}
                            >
                                <LazyLoadImage src={item.img} effect='blur' style={{ width: '100%' }} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Gallery;
