import React from 'react';
// import '../css/main.css';
import '../css/button.css';

const HeroSlider = (props) => {
    return (
        <>
            <div className='slider_area'>
                <div className='single_slider  d-flex align-items-center slider_bg_1 overlay'>
                    <div className='container'>
                        <div className='row align-items-center justify-content-center'>
                            <div className='col-xl-12'>
                                <div className='slider_text text-center'>
                                    <div className='shape_1 wow fadeInUp' data-wow-duration='1s' data-wow-delay='.2s'>
                                        <img src='/img/shape/shape_1.svg' alt='' />
                                    </div>
                                    <div className='shape_2 wow fadeInDown' data-wow-duration='1s' data-wow-delay='.2s'>
                                        <img src='/img/shape/shape_2.svg' alt='' />
                                    </div>

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
            <a href='#performer' data-start='display: block' data-100-start='display: none' className='wow fadeInUp btn-scroll-down scroll'></a>
        </>
    );
};

export default HeroSlider;
