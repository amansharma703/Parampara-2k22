import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header>
                <div className='header-area '>
                    <div id='sticky-header' className='main-header-area'>
                        <div className='container'>
                            <div className='header_bottom_border'>
                                <div className='row align-items-center'>
                                    <div className='col-xl-3 col-lg-3'>
                                        <div className='logo'>
                                            <NavLink to='/'>
                                                <img id='logo-min' src='/img/logo2.png' style={{ width: '80%' }} alt='' />
                                            </NavLink>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-lg-6'>
                                        <div className='main-menu  d-none d-lg-block'>
                                            <nav>
                                                <ul id='navigation'>
                                                    <li>
                                                        <NavLink to='/'> Home</NavLink>
                                                    </li>
                                                    {/* <li>
                                                        <NavLink to='/performer'> Performer</NavLink>
                                                    </li> */}

                                                    <li>
                                                        <a href='#'>
                                                            Events <i className='ti-angle-down'></i>
                                                        </a>
                                                        <ul className='submenu'>
                                                            <li>
                                                                <NavLink to='/techevent'> Technical</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to='/culturalevent'> Cultural</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to='/sportsevent'> Sports</NavLink>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <NavLink to='/gallery'> Gallery</NavLink>
                                                        {/* 
                                                        <a href='#'>Gallery</a> */}
                                                    </li>
                                                    <li>
                                                        <NavLink to='/contact'> Contact</NavLink>

                                                        {/* <a href='/contact'>Contact</a> */}
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className='col-xl-3 col-lg-3 d-none d-lg-block'>
                                        <div className='buy_tkt'>
                                            <div className='book_btn d-none d-lg-block'>
                                                <a
                                                    href='https://docs.google.com/forms/d/e/1FAIpQLSez8w1wu89eHblt1Kqo6Gc7R-8b96BqZNv_BPaLDuqZR327tA/viewform?vc=0&c=0&w=1&flr=0'
                                                    target='_blank'
                                                >
                                                    Register
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='mobile_menu d-block d-lg-none'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
