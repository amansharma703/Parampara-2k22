import React from 'react';

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
                                            <a href='/'>
                                                <img id='logo-min' src='/img/logo.png' style={{ width: '80%' }} alt='' />
                                            </a>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-lg-6'>
                                        <div className='main-menu  d-none d-lg-block'>
                                            <nav>
                                                <ul id='navigation'>
                                                    <li>
                                                        <a href='/'>home</a>
                                                    </li>
                                                    <li>
                                                        {/* <Link to='/performer'>Performer</Link> */}
                                                        <a href='/performer'>Performer</a>
                                                    </li>

                                                    <li>
                                                        <a href='#'>
                                                            Events <i className='ti-angle-down'></i>
                                                        </a>
                                                        <ul className='submenu'>
                                                            <li>
                                                                <a href='#'>Technical</a>
                                                            </li>
                                                            <li>
                                                                <a href='#'>Sports</a>
                                                            </li>
                                                            <li>
                                                                <a href='#'>Cultural</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href='#'>Gallery</a>
                                                    </li>
                                                    <li>
                                                        <a href='/contact'>Contact</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className='col-xl-3 col-lg-3 d-none d-lg-block'>
                                        <div className='buy_tkt'>
                                            <div className='book_btn d-none d-lg-block'>
                                                <a href='#'>Buy Pass</a>
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
            {/* <!-- header-end --> */}
        </>
    );
};

export default Header;
