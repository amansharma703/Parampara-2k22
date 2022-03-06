import React from 'react';
import Performer from '../components/Performer';
import HeroSlider from '../components/HeroSlider';

const PerformerPage = () => {
    return (
        <>
            <HeroSlider name='Performer' message='Be are Top Performers' />
            <Performer />
        </>
    );
};

export default PerformerPage;
