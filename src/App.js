import React, { useLayoutEffect, useEffect } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import Footer from './components/Footer';
import GalleryPage from './Pages/GalleryPage';
import ScrollToTop from './components/ScrollToTop';
import TechnicalPage from './Pages/TechnicalPage';
import CulturalPage from './Pages/CulturalPage';
import SportsPage from './Pages/SportsPage';
import { Helmet } from 'react-helmet';
import EventDescription from './Pages/EventDescription';

function App() {
    return (
        <>
            <Router>
                <Helmet>
                    <title>Parampara 2k22</title>

                    <meta
                        name='description'
                        content='Parampara is a Cultural-Techno Fest imparting students with rigorous energy to unite, compete as well as enjoy the kudos of ITM'
                    />
                    <link rel='canonical' href='https://itmparampara.in/' />
                    <meta name='keyword' content='Parampara 2k22, Itm Gida Gorakhpur, Techn0-cultural fest of ITM Gida Gorakhpur' />
                    <meta name='robots' content='index, follow' />
                    <meta name='googlebot' content='index, follow' />

                    {/* <!-- Facebook Meta Tags -- > */}
                    <meta property='og:url' content='https://itmparampara.in/' />
                    <meta property='og:type' content='website' />
                    <meta property='og:title' content='Parampara 2k22' />
                    <meta
                        property='og:description'
                        content='Cultural-Techno Fest imparting students with rigorous energy to unite, compete as well as enjoy the kudos of ITM'
                    />

                    {/* <!-- Twitter Meta Tags -- > */}
                    <meta name='twitter:card' content='summary_large_image' />
                    <meta property='twitter:domain' content='https://itmparampara.in/' />
                    <meta property='twitter:url' content='https://itmparampara.in/' />
                    <meta name='twitter:title' content='Vibehut' />
                    <meta
                        name='twitter:description'
                        content='Cultural-Techno Fest imparting students with rigorous energy to unite, compete as well as enjoy the kudos of ITM'
                    />
                    <meta name='distribution' content='global' />
                    <meta name='copyright' content='parampara' />
                    <meta name='language' content='English' />
                    <meta name='rating' content='general' />
                    <meta name='robots' content='ALL' />
                    <meta name='revisit-after' content='Daily' />
                    <meta name='author' content='parampara' />
                    <meta name='bingbot' content=' index, follow ' />
                    <meta name='reply-to' content=' Info.itmgida@gmail.com ' />
                    <meta name='expires' content='never' />
                    <meta name='coverage' content='Worldwide' />
                </Helmet>
                <ScrollToTop />
                <Header />
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route exact path='/contact' element={<ContactPage />} />
                    <Route exact path='/gallery' element={<GalleryPage />} />
                    <Route exact path='/techevent' element={<TechnicalPage />} />
                    <Route exact path='/culturalevent' element={<CulturalPage />} />
                    <Route exact path='/sportsevent' element={<SportsPage />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
