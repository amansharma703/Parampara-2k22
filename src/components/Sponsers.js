import React from 'react';

function Sponsers() {
    const commMem = [
        {
            name: 'Aman Sharma',
            img: 'img/performer/1.png',
        },
        {
            name: 'Aditya Rai',
            img: 'img/performer/1.png',
        },
        {
            name: 'Yash Sahani',
            img: 'img/performer/1.png',
        },
        {
            name: 'Rahul Singh',
            img: 'img/performer/1.png',
        },
        {
            name: 'Gopu Singh',
            img: 'img/performer/1.png',
        },
    ];
    return (
        <>
            {/* <!-- brand_area_start  --> */}
            <div className='brand_area '>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='section_title text-center mb-80'>
                                <h4 className='wow fadeUp text-black' data-wow-duration='1s' data-wow-delay='.3s'>
                                    Organising Committee
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='brand_wrap'>
                                <div className='brand_active owl-carousel'>
                                    {commMem.map((item, index) => {
                                        return (
                                            <div key={index} className='single_brand text-center px-2 '>
                                                <img src={item.img} style={{ 'border-radius': '15px' }} alt='' />
                                                <h4 className='mt-2'>{item.name}</h4>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- brand_area_end  --> */}
        </>
    );
}

export default Sponsers;
