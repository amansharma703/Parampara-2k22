import React from 'react';

const HeroEvent = (props) => {
    return (
        <>
            <div className='slider_area'>
                <div className='single_slider  d-flex align-items-center slider_bg_1 overlay'>
                    <div className='container'>
                        <div className='row align-items-center justify-content-center'>
                            <div className='col-xl-12'>
                                <div className='slider_text text-center'>
                                    <h3 className='wow fadeInUp' data-wow-duration='1s' data-wow-delay='.4s'>
                                        {props.name}
                                    </h3>
                                    <p className='wow fadeInUp' data-wow-duration='1.1s' data-wow-delay='.5s'>
                                        {props.message}
                                    </p>
                                    <p className='wow fadeInUp text-sm' data-wow-duration='1.2s' data-wow-delay='.5s'>
                                        <small>{props.feed}</small>
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

export default HeroEvent;
