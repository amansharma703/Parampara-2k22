import React, { useEffect, useState } from 'react';

import CardPage from '../components/CardPage';
import HeroSlider from '../components/HeroSlider';
import ProgramTimeline from '../components/ProgramTimeline';
import SportEvent from '../models/SportEvent';

const SportsPage = () => {
    const [event, setEvent] = useState([]);
    const getData = async () => {
        const res = await fetch('https://parampara-48b01-default-rtdb.firebaseio.com/event.json');
        const data = await res.json();
        setEvent(data.sport.eventlist);
        // console.log(data.technical.eventlist);
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <HeroSlider name='Sports Event' message='All Sports schedules are here!' />
            {/* <ProgramTimeline /> */}
            <CardPage data={event} />
        </>
    );
};

export default SportsPage;
