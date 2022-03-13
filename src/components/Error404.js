import React from 'react';

const Error404 = () => {
    return (
        <>
            <section className='section error'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 m-auto'>
                            <div className='block text-center'>
                                <img src='img/404.png' alt='404' />
                                <h3>
                                    Oops!... <span>Page Not Found.</span>
                                </h3>
                                <a href='/' className='btn btn-main-md'>
                                    Go to home
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Error404;
