import React from 'react';

const Card = (props) => {
    return (
        <>
            <div data-aos={props.aos} data-aos-offset={props.aos_offset} className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
                <div className='card p-0 overflow-hidden shadow card-hover'>
                    <div className='embed-responsive embed-responsive-16by9'>
                        <img
                            className='card-img-top embed-responsive-item'
                            src={props.img}
                            alt='Card image cap'
                            style={{ width: '100%', height: '30vh', 'object-fit': 'cover' }}
                        />
                    </div>
                    <div className='card-body' style={{ height: '50%' }}>
                        <h3 className='card-title'>{props.title}</h3>
                        <span>Event Timing : </span>
                        <span className='card-text'>{props.desc}</span>
                        <button className='mt-3 btn btn-primary'>More Detail </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
