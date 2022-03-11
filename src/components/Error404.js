import React from 'react';

const Error404 = () => {
    return (
        <>
            <section class='section error'>
                <div class='container'>
                    <div class='row'>
                        <div class='col-md-6 m-auto'>
                            <div class='block text-center'>
                                <img src='img/404.png' alt='404' />
                                <h3>
                                    Oops!... <span>Page Not Found.</span>
                                </h3>
                                <a href='/' class='btn btn-main-md'>
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
