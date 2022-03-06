import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PerformerPage from './Pages/PerformerPage';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import Footer from './components/Footer';
import GalleryPage from './Pages/GalleryPage';

function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route exact path='/performer' element={<PerformerPage />} />
                    <Route exact path='/contact' element={<ContactPage />} />
                    <Route exact path='/gallery' element={<GalleryPage />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
