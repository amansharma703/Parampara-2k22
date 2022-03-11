import React from 'react';

const FaceBook = () => {
    return (
        <>
            <iframe
                className='wow fadeInUp'
                src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fitmgkpofficial&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
                width='340'
                height='500'
                // style='border:none;overflow:hidden'
                scrolling='no'
                frameborder='0'
                allowfullscreen='true'
                allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
            ></iframe>
        </>
    );
};

export default FaceBook;
