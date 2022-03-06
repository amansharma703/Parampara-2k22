import React from 'react';

const Contact = () => {
    return (
        <>
            {/* <div className='row'>
                <div className='col-12'>
                    <h2 className='contact-title'>Get in Touch</h2>
                </div>
                <div className='col-lg-8'>
                    <form className='form-contact contact_form' action='contact_process.php' method='post' id='contactForm' novalidate='novalidate'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <textarea
                                        className='form-control w-100'
                                        name='message'
                                        id='message'
                                        cols='30'
                                        rows='9'
                                        onfocus="this.placeholder = ''"
                                        onblur="this.placeholder = 'Enter Message'"
                                        placeholder=' Enter Message'
                                    ></textarea>
                                </div>
                            </div>
                            <div className='col-sm-6'>
                                <div className='form-group'>
                                    <input
                                        className='form-control valid'
                                        name='name'
                                        id='name'
                                        type='text'
                                        onfocus="this.placeholder = ''"
                                        onblur="this.placeholder = 'Enter your name'"
                                        placeholder='Enter your name'
                                    />
                                </div>
                            </div>
                            <div className='col-sm-6'>
                                <div className='form-group'>
                                    <input
                                        className='form-control valid'
                                        name='email'
                                        id='email'
                                        type='email'
                                        onfocus="this.placeholder = ''"
                                        onblur="this.placeholder = 'Enter email address'"
                                        placeholder='Email'
                                    />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <input
                                        className='form-control'
                                        name='subject'
                                        id='subject'
                                        type='text'
                                        onfocus="this.placeholder = ''"
                                        onblur="this.placeholder = 'Enter Subject'"
                                        placeholder='Enter Subject'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='form-group mt-3'>
                            <button type='submit' className='button button-contactForm boxed-btn'>
                                Send
                            </button>
                        </div>
                    </form>
                </div>
                <div className='col-lg-3 offset-lg-1'>
                    <div className='media contact-info'>
                        <span className='contact-info__icon'>
                            <i className='ti-home'></i>
                        </span>
                        <div className='media-body'>
                            <h3>Buttonwood, California.</h3>
                            <p>Rosemead, CA 91770</p>
                        </div>
                    </div>
                    <div className='media contact-info'>
                        <span className='contact-info__icon'>
                            <i className='ti-tablet'></i>
                        </span>
                        <div className='media-body'>
                            <h3>+1 253 565 2365</h3>
                            <p>Mon to Fri 9am to 6pm</p>
                        </div>
                    </div>
                    <div className='media contact-info'>
                        <span className='contact-info__icon'>
                            <i className='ti-email'></i>
                        </span>
                        <div className='media-body'>
                            <h3>support@colorlib.com</h3>
                            <p>Send us your query anytime!</p>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!-- ================ contact section end ================= --> */}

            {/* <!-- ================ contact section start ================= --> */}
            <section className='contact-section'>
                <div className='container'>
                    {/* <div className="d-none d-sm-block mb-5 pb-4">
                    <div id="map" style="height: 480px; position: relative; overflow: hidden;"> </div>
                    <script>
                        function initMap() {
                            var uluru = {
                                lat: -25.363,
                                lng: 131.044
                            };
                            var grayStyles = [{
                                    featureType: "all",
                                    stylers: [{
                                            saturation: -90
                                        },
                                        {
                                            lightness: 50
                                        }
                                    ]
                                },
                                {
                                    elementType: 'labels.text.fill',
                                    stylers: [{
                                        color: '#ccdee9'
                                    }]
                                }
                            ];
                            var map = new google.maps.Map(document.getElementById('map'), {
                                center: {
                                    lat: -31.197,
                                    lng: 150.744
                                },
                                zoom: 9,
                                styles: grayStyles,
                                scrollwheel: false
                            });
                        }
                    </script>
                    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&amp;callback=initMap">
                    </script>
    
                </div> */}

                    <div className='row'>
                        <div className='col-12'>
                            <h2 className='contact-title'>Get in Touch</h2>
                        </div>
                        <div className='col-lg-8'>
                            <form className='form-contact contact_form' action='#' method='post' id='contactForm' novalidate='novalidate'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='form-group'>
                                            <textarea
                                                className='form-control w-100'
                                                name='message'
                                                id='message'
                                                cols='30'
                                                rows='9'
                                                onfocus="this.placeholder = ''"
                                                onblur="this.placeholder = 'Enter Message'"
                                                placeholder=' Enter Message'
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className='col-sm-6'>
                                        <div className='form-group'>
                                            <input
                                                className='form-control valid'
                                                name='name'
                                                id='name'
                                                type='text'
                                                onfocus="this.placeholder = ''"
                                                onblur="this.placeholder = 'Enter your name'"
                                                placeholder='Enter your name'
                                            />
                                        </div>
                                    </div>
                                    <div className='col-sm-6'>
                                        <div className='form-group'>
                                            <input
                                                className='form-control valid'
                                                name='email'
                                                id='email'
                                                type='email'
                                                onfocus="this.placeholder = ''"
                                                onblur="this.placeholder = 'Enter email address'"
                                                placeholder='Email'
                                            />
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='form-group'>
                                            <input
                                                className='form-control'
                                                name='subject'
                                                id='subject'
                                                type='text'
                                                onfocus="this.placeholder = ''"
                                                onblur="this.placeholder = 'Enter Subject'"
                                                placeholder='Enter Subject'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='form-group mt-3'>
                                    <button type='submit' className='button button-contactForm boxed-btn'>
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className='col-lg-3 offset-lg-1'>
                            <div className='media contact-info'>
                                <span className='contact-info__icon'>
                                    <i className='ti-home'></i>
                                </span>
                                <div className='media-body'>
                                    <h4>Buttonwood, California.</h4>
                                    <p>Rosemead, CA 91770</p>
                                </div>
                            </div>
                            <div className='media contact-info'>
                                <span className='contact-info__icon'>
                                    <i className='ti-tablet'></i>
                                </span>
                                <div className='media-body'>
                                    <h4>+1 253 565 2365</h4>
                                    <p>Mon to Fri 9am to 6pm</p>
                                </div>
                            </div>
                            <div className='media contact-info'>
                                <span className='contact-info__icon'>
                                    <i className='ti-email'></i>
                                </span>
                                <div className='media-body'>
                                    <h4>support@colorlib.com</h4>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ================ contact section end ================= --> */}
        </>
    );
};

export default Contact;
