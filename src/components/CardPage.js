import React, { useEffect } from 'react';
import Card from './Card';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ReactLoading from 'react-loading';

// import Img from 'img/performer/1.png';
// import Img1 from '../../public/img/performer/1.png';

let ImgData = [
    {
        id: 1,
        imgSrc: 'img/program_details/1.png',
    },
    {
        id: 2,
        imgSrc: 'img/program_details/2.jpg',
    },
    {
        id: 3,
        imgSrc: 'img/program_details/3.png',
    },
    {
        id: 4,
        imgSrc: 'img/program_details/4.jpg',
    },
    {
        id: 5,
        imgSrc: 'img/program_details/5.jpg',
    },
    {
        id: 6,
        imgSrc: 'img/program_details/2.jpg',
    },
];

const CardPage = (props) => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <>
            <section className='py-4 py-lg-5 container'>
                <div className='row'>
                    {props.data.map((item, index) => {
                        return <Card aos='fade-up' aos_offset='100' img={item.img} title={item.title} desc='Yet to be Decided' />;
                    })}
                    {/* <Card aos='fade-up' aos_offset='100' img={ImgData[0].imgSrc} title='Tech event' desc='Description on the go' /> */}
                    {/* <Card aos='fade-up' aos_offset='100' img={ImgData[0].imgSrc} title='Tech event' desc='Description on the go' /> */}
                    {/* <Card aos='fade-up' aos_offset='100' img={ImgData[0].imgSrc} title='Tech event' desc='Description on the go' /> */}
                </div>
            </section>
        </>
    );
};

export default CardPage;
