import React from 'react';
import FaceBook from './SocialPlugins/FaceBook';
import { NavLink } from 'react-router-dom';

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
                                            7th, 8th & 9th Apr, 2k22
                                        </h4>
                                        <h3 className='wow fadeInUp' data-wow-duration='1s' data-wow-delay='.4s'>
                                            Itm Gida, Gorakhpur
                                        </h3>
                                        <p className='wow fadeInUp' data-wow-duration='1s' data-wow-delay='.5s'>
                                            The event regularly attracts a diverse range of talent from around the state.
                                        </p>
                                        <a
                                            href='https://docs.google.com/forms/d/1yMgIqfgdG86AVeY-QHqdCMIYxoq6v-brsRWCbM2ffFg/viewform?edit_requested=true'
                                            target='_blank'
                                            className='boxed-btn3 wow fadeInUp'
                                            data-wow-duration='1s'
                                            data-wow-delay='.6s'
                                        >
                                            Buy Tickets
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer_top footer_last'>
                    <div className='container'>
                        <div className='footer_widget'>
                            <div className='row mb-3 d-flex flex-row-reverse'>
                                <div className='col-md-4 py-3'>
                                    <h3 className='wow fadeInUp'>FaceBook Page</h3>
                                    <FaceBook />
                                </div>
                                <div className='col-md-4  py-3'>
                                    <h3 className='wow fadeInUp'>Youtube </h3>
                                    <iframe
                                        className='wow fadeInUp'
                                        width='80%'
                                        height='50%'
                                        src='https://www.youtube.com/embed/qc3inn7uD8k'
                                        // title='YouTube video player'
                                        // frameborder='0'
                                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                        allowFullscreen='true'
                                    ></iframe>
                                    <h3 className='wow fadeInUp'>Quick Links</h3>
                                    <ul className='list-unstyled wow fadeInUp'>
                                        <li>
                                            <NavLink to='#about'> About</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/techevent'> Events</NavLink>
                                            {/* <a href='#'>Speakers</a> */}
                                        </li>
                                        <li>
                                            <NavLink to='/gallery'> Gallery</NavLink>
                                            {/* <a href='/gallery'>Gallery</a> */}
                                        </li>
                                        <li>
                                            <NavLink to='/contact'> Contact Us</NavLink>
                                            {/* <a href='/contact'>Contact Us</a> */}
                                        </li>
                                    </ul>
                                </div>
                                <div className='col-md-4 py-3'>
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
                                    <h3 className='wow fadeInUp'>Our Vision</h3>
                                    <ul className=' list-unstyled vision wow fadeInUp'>
                                        <li>
                                            Our vision of Parampara the annual fest is not only the degree. It is the wholesome growth of our students
                                            to become a more sustainable, humane, and sensible placed candidate.
                                        </li>
                                        <li>
                                            To create unforgettable experiences and encouters with a unique blend of world cultural set in our
                                            manificent region.
                                        </li>
                                        <li>
                                            Integrity in all situations and transactions; respecting the opinions and perspectives of others,
                                            accepting responsibility for our actions.
                                        </li>
                                        <li>
                                            Representing the interests of all segments of our community and demonstrating sensitivity to their
                                            diversity.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-12 text-center'>
                                    <div className='border-top pt-5'>
                                        <div className='second-footer'>
                                            <p className='list-unstyled wow fadeInUp'>
                                                Copyright © <script>document.write(new Date().getFullYear());</script>2022 All rights reserved | {}
                                                {/* <a href='/#'>parampara.in</a> | */}
                                                <a href='https://www.itmgkp.edu.in/'> itmgkp.edu.in </a>
                                            </p>
                                            <p className='list-unstyled wow fadeInUp'>
                                                Developed with ❤️ by
                                                <a href='https://amansharma703.vercel.app/' target='_black'>
                                                    {' '}
                                                    Aman Sharma{' '}
                                                </a>{' '}
                                                &{' '}
                                                <a href='https://www.linkedin.com/in/rahul-ranjan-singh/' target='_black'>
                                                    Rahul Ranjan Singh
                                                </a>
                                            </p>
                                        </div>
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
