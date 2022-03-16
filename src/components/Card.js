import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../css/card.css';

const Card = (props) => {
    return (
        <>
            <div data-aos={props.aos} data-aos-offset={props.aos_offset} className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
                <div className='card rounded p-0 overflow-hidden shadow card-hover '>
                    <div className='embed-responsive embed-responsive-16by9 '>
                        <LazyLoadImage
                            className='card-img-top embed-responsive-item'
                            src={props.item.imgUrl}
                            alt='Card image cap'
                            effect='blur'
                            style={{ width: '100%', height: '30vh', 'object-fit': 'cover' }}
                        />
                    </div>
                    <div className='card-body' style={{ height: '50%' }}>
                        <h3 className='card-title text-center'>{props.item.title}</h3>
                        <div>
                            <span>Event Timing : </span>
                            {/* <span className='card-text'>{props.item.date}</span> */}
                            <span className='card-text'>Yet to Decide</span>
                        </div>
                        <div>
                            <span>Venue : </span>
                            {/* <span className='card-text'>{props.item.date}</span> */}
                            <span className='card-text'>Yet to Decide</span>
                        </div>
                        <div>
                            <span>Co-ordinator : </span>
                            <span className='card-text'>
                                <strong>{props.item.coordinators}</strong>
                            </span>
                        </div>
                        <div>
                            <span>Contact No : </span>
                            <span className='card-text'>{props.item.contact}</span>
                        </div>

                        {/* <p className='text-black text-sm'>
                            <small>Co-ordinator : </small>
                            <span>{props.item.coordinators}</span>{' '}
                        </p> */}
                        {/* <button className='mt-3 btn btn-primary'>More Detail </button> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
