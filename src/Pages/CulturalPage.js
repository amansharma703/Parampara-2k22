import React, { useEffect, useState } from 'react';
import CardPage from '../components/CardPage';
import Helmet from 'react-helmet';
import HeroPage from '../components/HeroPage';

const CulturalPage = () => {
    const [event, setEvent] = useState([]);
    const getData = async () => {
        const res = await fetch('https://parampara-48b01-default-rtdb.firebaseio.com/event.json');
        const data = await res.json();
        setEvent(data.cultural.eventlist);
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <Helmet>
                <title>Cultural Events - Parampara 2k22</title>
                <meta
                    name='description'
                    content='Here are the list of all Cultural events, Among on show skills in various competition given below '
                />
            </Helmet>

            <HeroPage title='Cultural Events' currentPage='Cultural' imgName='culturalEvent.jpg' />
            <CardPage data={event} />
        </>
    );
};

export default CulturalPage;
