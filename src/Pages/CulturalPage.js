import React, { useEffect, useState } from 'react';
import CardPage from '../components/CardPage';
import HeroEvent from '../components/HeroEvent';
import Helmet from 'react-helmet';

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
            <HeroEvent name='Cultural' message='All Cultural schedules are here!' feed='7,8,9 April Be Ready to Rock' />
            <CardPage data={event} />
        </>
    );
};

export default CulturalPage;
