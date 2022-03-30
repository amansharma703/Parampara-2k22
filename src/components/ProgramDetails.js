import React from 'react';

const ProgramDetails = () => {
    return (
        <>
            {/* <!-- about_area_start  --> */}
            <div id='about' className='about_area   px-3'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8'>
                            <div className='section_title text-center mt-5 mb-80'>
                                <h3 className='wow fadeInRight text-black' data-wow-duration='1s' data-wow-delay='.3s'>
                                    About Program
                                </h3>
                                <p className='wow fadeInRight text-black' data-wow-duration='1s' data-wow-delay='.4s'>
                                    Parampara is the annual Sports and Techno-Cultural festival of the ITM GIDA, Gorakhpur. This auspicious fest
                                    originated in 2019 to provide a platform for the Student Community to enhance and showcase their skills in their
                                    respective fields.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='row align-items-center'>
                        <div className='col-lg-7 col-md-6'>
                            <div className='about_thumb'>
                                <div className='shap_3  wow fadeInLeft' data-wow-duration='1s' data-wow-delay='.4s'>
                                    <img src='img/shape/shape_3.svg' alt='' />
                                </div>
                                <div className='thumb_inner   wow fadeInUp rounded  shadow' data-wow-duration='1s' data-wow-delay='.3s'>
                                    <img src='img/about/about2.jpg' alt='' />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5 col-md-6'>
                            <div className='about_info pl-68'>
                                <h4 className=' wow fadeInLeft' data-wow-duration='1s' data-wow-delay='.5s'>
                                    It’s time to book your seat
                                </h4>
                                <p className=' wow fadeInLeft text-black' data-wow-duration='1s' data-wow-delay='.6s'>
                                    The event perpetually attracts a wide range of talent from all around the state, with various expertise in
                                    different fields, and with different levels of experience from the list of events provided.
                                </p>
                                <a
                                    href='https://docs.google.com/forms/d/e/1FAIpQLSez8w1wu89eHblt1Kqo6Gc7R-8b96BqZNv_BPaLDuqZR327tA/viewform?vc=0&c=0&w=1&flr=0'
                                    target='_blank'
                                    className='boxed-btn3  wow fadeInLeft'
                                    data-wow-duration='1s'
                                    data-wow-delay='.7s'
                                >
                                    Register
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- about_area_end  --> */}
        </>
    );
};

export default ProgramDetails;
