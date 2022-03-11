import React, { useLayoutEffect, useEffect } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import PerformerPage from './Pages/PerformerPage';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import Footer from './components/Footer';
import GalleryPage from './Pages/GalleryPage';
import ScrollToTop from './components/ScrollToTop';
import TechnicalPage from './Pages/TechnicalPage';
import CulturalPage from './Pages/CulturalPage';
import SportsPage from './Pages/SportsPage';
import ParticlesEffect from './components/utils/ParticlesEffect';
import Error404 from './components/Error404';
// impoer Error404

function App() {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <>
            <Router>
                <ScrollToTop />
                <Header />
                {/* <ParticlesEffect /> */}
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route exact path='/performer' element={<PerformerPage />} />
                    <Route exact path='/contact' element={<ContactPage />} />
                    <Route exact path='/gallery' element={<GalleryPage />} />
                    <Route exact path='/techevent' element={<TechnicalPage />} />
                    <Route exact path='/culturalevent' element={<CulturalPage />} />
                    <Route exact path='/sportsevent' element={<SportsPage />} />
                    <Route path='*' element={<Error404 />}></Route>
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
