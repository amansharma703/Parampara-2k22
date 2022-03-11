import React from 'react';
import '../css/eventschedule.css';
import TechEvent from '../models/TechEvent';
import CulturalEvent from '../models/CulturalEvent';
import SportEvent from '../models/SportEvent';

const Eventschedule = () => {
    return (
        <>
            <section class='performar_area schedule black_bg '>
                <div class='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='section_title mb-75'>
                                <h3 className='wow fadeInRight' data-wow-duration='1s' data-wow-delay='.3s'>
                                    Event Schedule
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class='row'>
                        <div class='col-12'>
                            <div class='schedule-tab'>
                                <ul class='nav nav-pills text-center'>
                                    <li class='nav-item'>
                                        <a class='nav-link active' href='#nov20' data-toggle='pill'>
                                            {/* Day-01 */}
                                            Technical
                                            {/* <span>7 April 2022</span> */}
                                        </a>
                                    </li>
                                    <li class='nav-item'>
                                        <a class='nav-link' href='#nov21' data-toggle='pill'>
                                            {/* Day-02 */}
                                            {/* <span>8 April 2022</span> */}
                                            Cultural
                                        </a>
                                    </li>
                                    <li class='nav-item'>
                                        <a class='nav-link' href='#nov22' data-toggle='pill'>
                                            {/* Day-03 */}
                                            {/* <span>9 April 2022</span>
                                             */}
                                            Sports
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class='schedule-contents bg-schedule'>
                                <div class='tab-content' id='pills-tabContent'>
                                    <div class='tab-pane fade show active schedule-item' id='nov20'>
                                        {/* <!-- Headings --> */}
                                        <ul class='m-0 p-0'>
                                            <li class='headings'>
                                                <div class='time'>Event Name</div>
                                                <div class='speaker'>Date</div>
                                                <div class='subject'>Co-ordinator</div>
                                                <div class='venue'>Contact</div>
                                            </li>
                                            {/* <!-- Schedule Details --> */}
                                            {TechEvent.map((item, index) => {
                                                return (
                                                    <li class='schedule-details'>
                                                        <div class='block'>
                                                            <div class='time'>
                                                                <i class='fa fa-clock-o'></i>
                                                                <span class='time'>{item.title}</span>
                                                            </div>
                                                            <div class='speaker'>
                                                                <span class='name'>{item.date}</span>
                                                            </div>
                                                            <div class='subject'>{item.handler}</div>
                                                            <div class='venue'>{item.contact}</div>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                    <div class='tab-pane fade schedule-item' id='nov21'>
                                        {/* <!-- Headings --> */}
                                        <ul class='m-0 p-0'>
                                            <li class='headings'>
                                                <div class='time'>Event Name</div>
                                                <div class='speaker'>Date</div>
                                                <div class='subject'>Co-ordinator</div>
                                                <div class='venue'>Contact</div>
                                            </li>
                                            {/* <!-- Schedule Details --> */}
                                            {CulturalEvent.map((item, index) => {
                                                return (
                                                    <li class='schedule-details'>
                                                        <div class='block'>
                                                            <div class='time'>
                                                                <i class='fa fa-clock-o'></i>
                                                                <span class='time'>{item.title}</span>
                                                            </div>
                                                            <div class='speaker'>
                                                                <span class='name'>{item.date}</span>
                                                            </div>
                                                            <div class='subject'>{item.handler}</div>
                                                            <div class='venue'>{item.contact}</div>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                    <div class='tab-pane fade schedule-item' id='nov22'>
                                        {/* <!-- Headings --> */}
                                        <ul class='m-0 p-0'>
                                            <li class='headings'>
                                                <div class='time'>Event Name</div>
                                                <div class='speaker'>Date</div>
                                                <div class='subject'>Co-ordinator</div>
                                                <div class='venue'>Contact</div>
                                            </li>

                                            {SportEvent.map((item, index) => {
                                                return (
                                                    <li class='schedule-details'>
                                                        <div class='block'>
                                                            <div class='time'>
                                                                <i class='fa fa-clock-o'></i>
                                                                <span class='time'>{item.title}</span>
                                                            </div>
                                                            <div class='speaker'>
                                                                <span class='name'>{item.date}</span>
                                                            </div>
                                                            <div class='subject'>{item.handler}</div>
                                                            <div class='venue'>{item.contact}</div>
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
