import React from 'react';

function Footer() {
    return (
        <>
            <footer className='footer'>
                <div className='footer_top'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-lg-6 col-md-8'>
                                <div className='footer_widget'>
                                    <div className='address_details text-center'>
                                        <h4 className='wow fadeInUp' data-wow-duration='1s' data-wow-delay='.3s'>
                                            7 Apr, 2022
                                        </h4>
                                        <h3 className='wow fadeInUp' data-wow-duration='1s' data-wow-delay='.4s'>
                                            Itm Gida, Gorakhpur
                                        </h3>
                                        <p className='wow fadeInUp' data-wow-duration='1s' data-wow-delay='.5s'>
                                            The event regularly attracts a diverse range of attendees from around the state.
                                        </p>
                                        <a href='#' className='boxed-btn3 wow fadeInUp' data-wow-duration='1s' data-wow-delay='.6s'>
                                            Buy Tickets
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer_top' id='last_footer'>
                    <div className='container'>
                        <div className='footer_widget'>
                            <div className='row mb-3'>
                                <div className='col-md-4'>
                                    <h3 className='wow fadeInUp'>About Event</h3>
                                    <p className='wow fadeInUp'>The Greatness In The Cultural Is Found In The Festivals.</p>
                                </div>
                                <div className='col-md-3 ml-auto'>
                                    <h3 className='wow fadeInUp'>Quick Links</h3>
                                    <ul className='list-unstyled wow fadeInUp'>
                                        <li>
                                            <a href='/#about'>About Us</a>
                                        </li>
                                        <li>
                                            <a href='#'>Speakers</a>
                                        </li>
                                        <li>
                                            <a href='#'>Gallery</a>
                                        </li>
                                        <li>
                                            <a href='/contact'>Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col-md-4'>
                                    <h3 className='wow fadeInUp'>Connect with Us</h3>
                                    <p className='send-referal wow fadeInUp'>
                                        <a href='https://www.facebook.com/profile.php?id=Itmgkpofficial' target='_blank'>
                                            <i className='ti-facebook'></i>
                                        </a>
                                        <a href='https://twitter.com/Itmgkpofficial' target='_blank'>
                                            <i className='ti-twitter'></i>
                                        </a>
                                        <a href='https://www.instagram.com/Itmgkpofficial/' target='_blank'>
                                            <i className='ti-instagram'></i>
                                        </a>
                                        <a href='https://www.youtube.com/channel/UCjY-k5lG0TZCHW-aGvYspXQ' target='_blank'>
                                            <i className='ti-youtube'></i>
                                        </a>
                                        <a href='https://www.itmgkp.edu.in/' target='_blank'>
                                            <i className='ti-world'></i>
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-12 text-center'>
                                    <div className='border-top pt-5'>
                                        <p className='list-unstyled'>
                                            Copyright © <script>document.write(new Date().getFullYear());</script>2022 All rights reserved | {}
                                            <a href='/#'>parampara.in</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
