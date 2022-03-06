import Header from './components/Header';
import Performer from './components/Performer';
import HeroSlider from './components/HeroSlider';
import ProgramDetails from './components/ProgramDetails';
import ProgramTimeline from './components/ProgramTimeline';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PerformerPage from './Pages/PerformerPage';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route exact path='/performer' element={<PerformerPage />} />
                    <Route exact path='/contact' element={<ContactPage />} />
                    {/* <Route exact path='/about' element={<About />} /> */}
                    {/* <Route exact path='/contact' element={<Contact />} /> */}
                    {/* <Route exact path='/service' element={<Service />} /> */}
                    {/* <Route path='*' element={<Error />}></Route> */}
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
