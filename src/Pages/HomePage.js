import React from 'react';
import HeroSlider from '../components/HeroSlider';
import Performer from '../components/Performer';
import ProgramDetails from '../components/ProgramDetails';
import ProgramTimeline from '../components/ProgramTimeline';
import Sponsers from '../components/Sponsers';

const HomePage = () => {
    return (
        <>
            <HeroSlider name='Parampara 2k22' message='We are back with a Bang!' />
            <Performer />
            <ProgramDetails />
            <ProgramTimeline />
            <Sponsers />
        </>
    );
};

export default HomePage;
