import React from 'react';
import '../css/herogallery.css';

const HeroGallery = (props) => {
    return (
        <>
            <div className='slider_area'>
                <div className='single_slider  d-flex align-items-center slider_bg_3 overlay'>
                    <div className='container'>
                        <div className='row align-items-center justify-content-center'>
                            <div className='col-xl-12'>
                                <div className='slider_text text-center'>
                                    {/* <div id='new_shape_1 ' className='new_shape_1 wow fadeInUp' data-wow-duration='1s' data-wow-delay='.2s'>
                                        <img src='/img/shape/shape_1.svg' alt='' />
                                    </div> */}
                                    {/* <div id='new_shape_2' className='shape_2 wow fadeInDown' data-wow-duration='1s' data-wow-delay='.2s'>
                                        <img src='/img/shape/shape_2.svg' alt='' />
                                    </div> */}

                                    <h3 className='wow fadeInLeft' data-wow-duration='1s' data-wow-delay='.4s'>
                                        {props.name}
                                    </h3>
                                    <p className='wow fadeInLeft' data-wow-duration='1s' data-wow-delay='.5s'>
                                        {props.message}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroGallery;
