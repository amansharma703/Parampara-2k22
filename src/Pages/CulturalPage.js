import React, { useEffect, useState } from 'react';
import HeroSlider from '../components/HeroSlider';
import ProgramTimeline from '../components/ProgramTimeline';
import CardPage from '../components/CardPage';
import CulturalEvent from '../models/CulturalEvent';
import About from '../components/About';

const CulturalPage = () => {
    const [event, setEvent] = useState([]);
    const getData = async () => {
        const res = await fetch('https://parampara-48b01-default-rtdb.firebaseio.com/event.json');
        const data = await res.json();
        setEvent(data.cultural.eventlist);
        console.log(data.technical.eventlist);
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <HeroSlider name='Cultural Event' message='All Cultural schedules are here!' />
            <CardPage data={event} />
        </>
    );
};

export default CulturalPage;
