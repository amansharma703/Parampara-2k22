import React, { useState } from 'react';
// Importing toastify module
import { toast } from 'react-toastify';

// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';

// toast-configuration method,
toast.configure();

const Contact = () => {
    const [userData, setUserData] = useState({
        name: '',
        subject: '',
        email: '',
        message: '',
    });

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value });
    };

    // connect with firebase
    const submitData = async (event) => {
        event.preventDefault();
        const { name, subject, email, message } = userData;

        if (name && subject && email && message) {
            const res = fetch('https://itm-parampara-default-rtdb.firebaseio.com/contact.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    subject,
                    email,
                    message,
                }),
            });

            if (res) {
                setUserData({
                    name: '',
                    subject: '',
                    email: '',
                    message: '',
                });
                toast('Your message sends successfully!');
            } else {
                toast('plz fill the data correctly');
            }
        } else {
            toast('plz fill the data');
        }
    };

    return (
        <>
            {/* <!-- ================ contact section start ================= --> */}
            <section className='contact-section contact_bg'>
                <div className='container '>
                    <div className='row'>
                        <div className='col-12'>
                            <h2 className='contact-title'>Get in Touch</h2>
                        </div>
                        <div className='col-lg-8'>
                            <form className='form-contact contact_form' action='#' method='' id='contactForm' novalidate='novalidate'>
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
                                                value={userData.message}
                                                onChange={postUserData}
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className='col-sm-6'>
                                        <div className='form-group'>
                                            <input
                                                className='form-control valid'
                                                name='name'
                                                id=''
                                                type='text'
                                                onfocus="this.placeholder = ''"
                                                onblur="this.placeholder = 'Enter your name'"
                                                placeholder='Enter your name'
                                                value={userData.name}
                                                onChange={postUserData}
                                                required
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
                                                value={userData.email}
                                                onChange={postUserData}
                                                placeholder='Email'
                                                required
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
                                                value={userData.subject}
                                                onChange={postUserData}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='form-group mt-3'>
                                    <button onClick={submitData} className='button button-contactForm boxed-btn'>
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
                                    <h4>AL-1, Sector 7, Gida</h4>
                                    <p>Gorakhpur - 273001</p>
                                </div>
                            </div>
                            <div className='media contact-info'>
                                <span className='contact-info__icon mb-2'>
                                    <i className='ti-tablet'></i>
                                </span>
                                <div className='media-body'>
                                    <h4>+91 8081209480</h4>
                                    <h4>+91 9102575281</h4>
                                    <p>Mon to Fri 9am to 6pm</p>
                                </div>
                            </div>
                            {/* <div className='media contact-info'>
                                <span className='contact-info__icon'>
                                    <i className='ti-email'></i>
                                </span>
                                <div className='media-body'>
                                    <h4>aman703jk@gmail.com</h4>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ================ contact section end ================= --> */}
        </>
    );
};

export default Contact;
