import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ProgramTimeline from '../components/ProgramTimeline';
import CardPage from '../components/CardPage';
import CulturalEvent from '../models/CulturalEvent';

const CulturalPage = () => {
    return (
        <>
            <HeroSlider name='Cultural Event' message='All Cultural schedules are here!' />
            {/* <ProgramTimeline /> */}
            <CardPage data={CulturalEvent} />
        </>
    );
};

export default CulturalPage;
