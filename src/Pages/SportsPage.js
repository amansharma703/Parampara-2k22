import React from 'react';
import CardPage from '../components/CardPage';
import HeroSlider from '../components/HeroSlider';
import ProgramTimeline from '../components/ProgramTimeline';
import SportEvent from '../models/SportEvent';

const SportsPage = () => {
    return (
        <>
            <HeroSlider name='Sports Event' message='All Sports schedules are here!' />
            {/* <ProgramTimeline /> */}
            <CardPage data={SportEvent} />
        </>
    );
};

export default SportsPage;
