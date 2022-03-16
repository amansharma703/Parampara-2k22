import React, { useEffect, useState } from 'react';
import CardPage from '../components/CardPage';
import HeroEvent from '../components/HeroEvent';
const TechnicalPage = () => {
    const [event, setEvent] = useState([]);
    const getData = async () => {
        const res = await fetch('https://parampara-48b01-default-rtdb.firebaseio.com/event.json');
        const data = await res.json();
        setEvent(data.technical.eventlist);
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <HeroEvent name={`Technical`} message='All Technical schedules are here!' feed='7,8,9 April Be Ready to Rock' />
            {/* <ProgramTimeline /> */}
            <CardPage data={event} />
        </>
    );
};

export default TechnicalPage;
