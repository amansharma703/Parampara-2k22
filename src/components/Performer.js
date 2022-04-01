import React from 'react';
import Tilt from 'react-parallax-tilt';

const Performer = () => {
    const performerImg = [
        {
            name: 'Jatin Agni',
            imgSrc: '/img/performer/1.png',
            type: 'Singer',
        },

        {
            name: 'DJ Hermus',
            imgSrc: '/img/performer/5.jpg',
            type: 'DJ',
        },
        {
            name: 'Piyush Verma',
            imgSrc: '/img/performer/2.jpg',
            type: 'Musician',
        },
        {
            name: 'Mohd Shadan',
            imgSrc: '/img/performer/4.jpg',
            type: 'Singer',
        },
        {
            name: 'Satyam',
            imgSrc: '/img/performer/7.jpg',
            type: 'Fashion',
        },
        {
            name: 'Suparna Mukherjee',
            imgSrc: '/img/performer/3.jpg',
            type: 'Dancer',
        },
    ];
    return (
        <>
            {/* <!-- performar_area_start  --> */}
            <div id='performer' className='performar_area bg-black-gradient '>
                <div className='container '>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='section_title mb-75'>
                                <h3 className='wow fadeInUp ' data-wow-duration='1s' data-wow-delay='.3s'>
                                    Highlights
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-lg-10'>
                            <div className='row'>
                                {performerImg.map((item, index) => {
                                    return (
                                        <Tilt key={index} className=' col-lg-4 col-md-6 my-2 ' options={{ max: 60 }}>
                                            <div className=''>
                                                <div className='single_performer wow fadeInUp' data-wow-duration='1s' data-wow-delay='.3s'>
                                                    <div className='thumb'>
                                                        <img src={item.imgSrc} alt='' />
                                                    </div>
                                                    <div className='performer_heading'>
                                                        <h4>{item.name} </h4>
                                                        <span>{item.type}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tilt>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- performar_area_end  --> */}
        </>
    );
};

export default Performer;
