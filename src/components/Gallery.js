import { GoogleApiWrapper } from 'google-maps-react';
import React, { useState } from 'react';
import MapContainer from './MapContainer';
import '../css/gallery.css';
import CloseIcon from '@mui/icons-material/Close';
// import Img1 from '../../public/img/performer/1.png';
// import Img2 from '../../public/img/performer/2.png';
// import Img3 from '../../public/img/performer/2.png';
// import Img4 from '../../public/img/performer/3.jpg';
// import Img5 from '../../public/img/performer/3.png';
// import Img6 from '../../public/img/performer/4.jpg';

const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: 'img/performer/1.png',
        },
        {
            id: 2,
            imgSrc: 'img/performer/2.jpg',
        },
        {
            id: 3,
            imgSrc: 'img/performer/2.png',
        },
        {
            id: 4,
            imgSrc: 'img/performer/3.jpg',
        },
        {
            id: 5,
            imgSrc: 'img/performer/3.png',
        },
        {
            id: 6,
            imgSrc: 'img/performer/4.jpg',
        },
    ];
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        console.warn(imgSrc);
        setTempImgSrc(imgSrc);
        setModel(true);
    };
    return (
        <>
            <div className='container'>
                {/* <div className={model ? 'model open' : 'model'}>
                    <img src={tempImgSrc} />
                    <CloseIcon className='svg' onClick={() => setModel(false)} />
                </div> */}

                {/* <iframe
                        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621'
                        frameborder='0'
                        style='border:0'
                        allowfullscreen
                    ></iframe> */}

                <div className='gallery'>
                    {data.map((item, index) => {
                        return (
                            <div
                                className='pics'
                                key={index}
                                onClick={() => {
                                    getImg(item.imgSrc);
                                }}
                            >
                                <img src={item.imgSrc} style={{ width: '100%' }} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Gallery;
