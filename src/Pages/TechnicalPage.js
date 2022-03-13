import React, { useEffect, useState } from 'react';
import HeroSlider from '../components/HeroSlider';
import ProgramTimeline from '../components/ProgramTimeline';
import CardPage from '../components/CardPage';
import TechEvent from '../models/TechEvent';
const TechnicalPage = () => {
    const [event, setEvent] = useState([]);
    const getData = async () => {
        const res = await fetch('https://parampara-48b01-default-rtdb.firebaseio.com/event.json');
        const data = await res.json();
        setEvent(data.technical.eventlist);
        console.log(data.technical.eventlist);
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            {/* {
            } */}
            <HeroSlider name={`Technical Event`} message='All Technical schedules are here!' />
            {/* <ProgramTimeline /> */}
            <CardPage data={event} />
        </>
    );
};

export default TechnicalPage;
