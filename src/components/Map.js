import React from 'react';

const Map = () => {
    return (
        <>
            <div class='map_area'>
                <div className='main_map'>
                    <iframe
                        className='map_frame'
                        id='gmap_canvas'
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.0442062340717!2d83.27128811538417!3d26.742965373814215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6acb3de3508d%3A0x4595d733fd766bf9!2sITM%20college%20GIDA!5e0!3m2!1sen!2sin!4v1647809777961!5m2!1sen!2sin'
                        frameborder='0'
                        scrolling='no'
                        marginheight='0'
                        marginwidth='0'
                        loading='lazy'
                    ></iframe>
                </div>

                <div class='location_information black_bg wow fadeInUp' data-wow-duration='1s' data-wow-delay='.3s'>
                    <h3>Parampara 2k23</h3>
                    <div class='info_wrap'>
                        <div class='single_info'>
                            <p>
                                <span>Venue:</span>
                            </p>
                            <p>AL-1, Sector 7, Gida Gorakhpur - 273001</p>
                        </div>
                        <div class='single_info'>
                            <p>
                                <span>Phone:</span>
                            </p>
                            <p>
                                +91-9102575281 <br />
                                Jayesh Mani Tripathi
                            </p>
                        </div>
                        <div class='single_info'>
                            <span>E-mail:</span>
                            <p>parampara@itmgkp.edu.in</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Map;
