import React from 'react';
import HeroSlider from '../components/HeroSlider';
import Performer from '../components/Performer';
import ProgramDetails from '../components/ProgramDetails';
import ProgramTimeline from '../components/ProgramTimeline';
import Sponsers from '../components/Sponsers';
import Event from '../components/Event';
import FaceBook from '../components/SocialPlugins/FaceBook';
import Eventschedule from '../components/Eventschedule';
import CardPage from '../components/CardPage';

const HomePage = () => {
    return (
        <>
            <HeroSlider name='Parampara 2k22' message='We are back with a Bang!' />
            <Performer />
            <ProgramDetails />
            {/* <Event /> */}
            <Eventschedule />
            <ProgramTimeline />
            {/* <Sponsers /> */}
            {/* <FaceBook /> */}
        </>
    );
};

export default HomePage;
