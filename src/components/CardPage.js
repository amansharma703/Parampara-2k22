import React, { useEffect } from 'react';
import Card from './Card';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ReactLoading from 'react-loading';

const CardPage = (props) => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <>
            <section className='py-4 py-lg-5  event_bg'>
                <div className='container'>
                    <div className='row'>
                        {props.data.map((item, index) => {
                            {
                                return <Card aos='fade-up' key={index} aos_offset='100' item={item} />;
                            }
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default CardPage;
