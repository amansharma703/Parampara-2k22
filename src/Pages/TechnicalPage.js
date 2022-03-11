import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ProgramTimeline from '../components/ProgramTimeline';
import CardPage from '../components/CardPage';
import TechEvent from '../models/TechEvent';
const TechnicalPage = () => {
    return (
        <>
            <HeroSlider name={`Technical Event`} message='All Technical schedules are here!' />
            {/* <ProgramTimeline /> */}
            <CardPage data={TechEvent} />
        </>
    );
};

export default TechnicalPage;
