import React from 'react';

const MobilePromo = () => {
    return (
        <>
            <section class='mobile_promo bg-black'>
                <div class='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-10'>
                            <div class='row align-items-center '>
                                <div className='col-lg-9 col-md-8'>
                                    <p className='wow fadeInUp' data-wow-duration='.5s' data-wow-delay='.7s'>
                                        Parampara 2k22 mobile App is live, Click here to Download
                                    </p>
                                </div>
                                <div className='col-lg-3 col-md-4 '>
                                    <a
                                        href='https://firebasestorage.googleapis.com/v0/b/parampara-48b01.appspot.com/o/parampara%20app%2Fparampara.apk?alt=media&token=ba29fe2a-a226-476f-b23b-5347bccedc68'
                                        className='boxed-btn3  wow fadeInUp'
                                        data-wow-duration='1s'
                                        data-wow-delay='.7s'
                                    >
                                        Download
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MobilePromo;
