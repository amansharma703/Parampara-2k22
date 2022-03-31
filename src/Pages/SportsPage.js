import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import CardPage from '../components/CardPage';
import HeroPage from '../components/HeroPage';

const SportsPage = () => {
    const [event, setEvent] = useState([]);
    const getData = async () => {
        const res = await fetch('https://parampara-48b01-default-rtdb.firebaseio.com/event.json');
        const data = await res.json();
        setEvent(data.sport.eventlist);
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <Helmet>
                <title>Sports Events - Parampara 2k22</title>
                <meta name='description' content='Here are the list of all Sports events, Among on show skills in various competition given below ' />
            </Helmet>
            <HeroPage title='Sports Events' currentPage='Sports' imgName='sportsEvent.jpg' />

            <CardPage data={event} />
        </>
    );
};

export default SportsPage;
