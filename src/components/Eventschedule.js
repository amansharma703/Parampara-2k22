import React, { useEffect, useState } from 'react';
import '../css/eventschedule.css';

const Eventschedule = () => {
    const [techEvent, setTechEvent] = useState([]);
    const [sportEvent, setSportEvent] = useState([]);
    const [culEvent, setCulEvent] = useState([]);
    const getData = async () => {
        const res = await fetch('https://parampara-48b01-default-rtdb.firebaseio.com/event.json');
        const data = await res.json();
        setTechEvent(data.technical.eventlist);
        setSportEvent(data.sport.eventlist);
        setCulEvent(data.cultural.eventlist);
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <section className='performar_area schedule eventschedule_bg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='section_title mb-75'>
                                <h3 className='wow fadeInRight text-black' data-wow-duration='1s' data-wow-delay='.3s'>
                                    Event Schedule
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='schedule-tab'>
                                <ul className='nav nav-pills text-center'>
                                    <li className='nav-item'>
                                        <a className='nav-link active' href='#nov20' data-toggle='pill'>
                                            Technical
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='#nov21' data-toggle='pill'>
                                            Cultural
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='#nov22' data-toggle='pill'>
                                            Sports
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='schedule-contents bg-schedule'>
                                <div className='tab-content' id='pills-tabContent'>
                                    <div className='tab-pane fade show active schedule-item' id='nov20'>
                                        {/* <!-- Headings --> */}
                                        <ul className='m-0 p-0'>
                                            <li className='headings'>
                                                <div className='time'>Event Name</div>
                                                <div className='speaker'>Date</div>
                                                <div className='subject'>Co-ordinator</div>
                                                <div className='venue'>Contact</div>
                                            </li>
                                            {/* <!-- Schedule Details --> */}
                                            {techEvent.map((item, index) => {
                                                return (
                                                    <li key={index} className='schedule-details'>
                                                        <div className='block'>
                                                            <div className='time'>
                                                                <i className='fa fa-clock-o'></i>
                                                                <span className='time'>{item.title}</span>
                                                            </div>
                                                            <div className='speaker'>
                                                                <span className='name'>{item.date}</span>
                                                            </div>
                                                            <div className='subject'>{item.coordinators}</div>
                                                            <div className='venue'>{item.contact}</div>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                    <div className='tab-pane fade schedule-item' id='nov21'>
                                        {/* <!-- Headings --> */}
                                        <ul className='m-0 p-0'>
                                            <li className='headings'>
                                                <div className='time'>Event Name</div>
                                                <div className='speaker'>Date</div>
                                                <div className='subject'>Co-ordinator</div>
                                                <div className='venue'>Contact</div>
                                            </li>
                                            {/* <!-- Schedule Details --> */}
                                            {culEvent.map((item, index) => {
                                                return (
                                                    <li key={index} className='schedule-details'>
                                                        <div className='block'>
                                                            <div className='time'>
                                                                <i className='fa fa-clock-o'></i>
                                                                <span className='time'>{item.title}</span>
                                                            </div>
                                                            <div className='speaker'>
                                                                <span className='name'>{item.date}</span>
                                                            </div>
                                                            <div className='subject'>{item.coordinators}</div>
                                                            <div className='venue'>{item.contact}</div>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                    <div className='tab-pane fade schedule-item' id='nov22'>
                                        {/* <!-- Headings --> */}
                                        <ul className='m-0 p-0'>
                                            <li className='headings'>
                                                <div className='time'>Event Name</div>
                                                <div className='speaker'>Date</div>
                                                <div className='subject'>Co-ordinator</div>
                                                <div className='venue'>Contact</div>
                                            </li>

                                            {sportEvent.map((item, index) => {
                                                return (
                                                    <li key={index} className='schedule-details'>
                                                        <div className='block'>
                                                            <div className='time'>
                                                                <i className='fa fa-clock-o'></i>
                                                                <span className='time'>{item.title}</span>
                                                            </div>
                                                            <div className='speaker'>
                                                                <span className='name'>{item.date}</span>
                                                            </div>
                                                            <div className='subject'>{item.coordinators}</div>
                                                            <div className='venue'>{item.contact}</div>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Eventschedule;
