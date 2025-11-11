import '../css/gall.css';
import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Gall = () => {
    const [galleryData, setGalleryData] = useState([]);
    const getData = async () => {
        const res = await fetch('https://parampara-48b01-default-rtdb.firebaseio.com/highlighted.json');
        const data = await res.json();
        if (!data.error) {
            setGalleryData(data);
        }
    };

    console.log(galleryData);
    useEffect(() => {
        getData();
        Aos.init();
    }, []);

    return (
        <>
            <section className='bg-light py-5'>
                <div className='container'>
                    <div className='row mt-40 mt-xs-20'>
                        <div className='col-md-12 text-center'>
                            <h1>
                                Parampara <b>Highlights</b>
                            </h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className=' text-center mt-30 mt-xs-10'>
                            <p> Here's a glimpse at some of the Major Highlights of Parampara 2K22!</p>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div data-wow-delay='0.1s' data-wow-duration='1s' className='work-container mt-40 mt-xs-20 wow fadeIn'>
                        <div className='row px-4'>
                            {galleryData?.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        data-aos='fade-up'
                                        data-aos-offset='200'
                                        data-aos-duration='500'
                                        data-aos-easing='ease-in-out'
                                        className='col-md-3 col-sm-4 col-xs-12 work-item headline events'
                                    >
                                        <div className='figure effect-hover '>
                                            <LazyLoadImage src={item.img} alt='img01' effect='blur' />
                                            <div className='figcaption'>
                                                <h5 className='alt-font'>{item.title}</h5>
                                                {/* <p>{item.desc}</p> */}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gall;
