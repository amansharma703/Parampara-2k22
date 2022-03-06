import React from 'react';

function Sponsers() {
    return (
        <>
            {/* <!-- brand_area_start  --> */}
            <div className='brand_area black_bg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='section_title text-center mb-80'>
                                <h4 className='wow fadeInRight' data-wow-duration='1s' data-wow-delay='.3s'>
                                    Sponsor Logos
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='brand_wrap'>
                                <div className='brand_active owl-carousel'>
                                    <div className='single_brand text-center'>
                                        <img src='img/brand/1.png' alt='' />
                                    </div>
                                    <div className='single_brand text-center'>
                                        <img src='img/brand/2.png' alt='' />
                                    </div>
                                    <div className='single_brand text-center'>
                                        <img src='img/brand/3.png' alt='' />
                                    </div>
                                    <div className='single_brand text-center'>
                                        <img src='img/brand/4.png' alt='' />
                                    </div>
                                    <div className='single_brand text-center'>
                                        <img src='img/brand/5.png' alt='' />
                                    </div>
                                    <div className='single_brand text-center'>
                                        <img src='img/brand/1.png' alt='' />
                                    </div>
                                    <div className='single_brand text-center'>
                                        <img src='img/brand/2.png' alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- brand_area_end  --> */}
        </>
    );
}

export default Sponsers;
