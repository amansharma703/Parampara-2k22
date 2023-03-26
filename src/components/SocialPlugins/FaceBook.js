import React from 'react';

const FaceBook = () => {
    return (
        <>
            <iframe
                title='facebook'
                className='wow fadeInUp'
                src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FParamparaTheFest%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1185899982208393'
                width='100%'
                height='500'
                // style='border:none;overflow:hidden'
                scrolling='no'
                frameBorder='0'
                allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
            ></iframe>
        </>
    );
};

export default FaceBook;
