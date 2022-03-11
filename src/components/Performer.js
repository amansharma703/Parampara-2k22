import React from 'react';
import Tilt from 'react-parallax-tilt';

const Performer = () => {
    return (
        <>
            {/* <!-- performar_area_start  --> */}
            <div className='performar_area black_bg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='section_title mb-75'>
                                <h3 className='wow fadeInRight' data-wow-duration='1s' data-wow-delay='.3s'>
                                    Top Performer
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8'>
                            <div className='row'>
                                <Tilt className='Tilt col-lg-6 col-md-6' options={{ max: 60 }}>
                                    <div className=''>
                                        <div className='single_performer wow fadeInUp'>
                                            <div className='thumb'>
                                                <img src='/img/performer/1.png' alt='' />
                                            </div>
                                            <div className='performer_heading'>
                                                <h4>DJ Hermus</h4>
                                                <span>DJ</span>
                                            </div>
                                        </div>
                                    </div>
                                </Tilt>
                                <Tilt className='Tilt col-lg-6 col-md-6' options={{ max: 60 }}>
                                    <div className=''>
                                        <div className='single_performer wow fadeInUp'>
                                            <div className='thumb'>
                                                <img src='/img/performer/2.jpg' alt='' />
                                            </div>
                                            <div className='performer_heading'>
                                                <h4>Piyush Verma</h4>
                                                <span>Musician</span>
                                            </div>
                                        </div>
                                    </div>
                                </Tilt>
                                <Tilt className='Tilt col-lg-6 col-md-6' options={{ max: 60 }}>
                                    <div className=''>
                                        <div className='single_performer wow fadeInUp'>
                                            <div className='thumb'>
                                                <img src='/img/performer/3.jpg' alt='' />
                                            </div>
                                            <div className='performer_heading'>
                                                <h4>Ankit</h4>
                                                <span>Singer</span>
                                            </div>
                                        </div>
                                    </div>
                                </Tilt>
                                <Tilt className='Tilt col-lg-6 col-md-6'>
                                    <div className=''>
                                        <div className='single_performer wow fadeInUp'>
                                            <div className='thumb'>
                                                <img src='/img/performer/4.jpg' alt='' />
                                            </div>
                                            <div className='performer_heading'>
                                                <h4>Modh. Shadan</h4>
                                                <span>Singer</span>
                                            </div>
                                        </div>
                                    </div>
                                </Tilt>
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
