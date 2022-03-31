import React from 'react';
import { NavLink } from 'react-router-dom';

import '../css/heroPage.css';

const HeroPage = (props) => {
    return (
        <>
            <div class='page-header' style={{ background: `url('../img/banner/${props.imgName}')` }}>
                <div class='container'>
                    <div class='row justify-content-center'>
                        <div class='col-10'>
                            <div class='entry-header'>
                                <h3 class='entry-title mb-1'>{props.title}</h3>

                                <ul class='breadcrumbs d-flex align-items-center'>
                                    <li>
                                        <NavLink to='/'>Home</NavLink>
                                    </li>
                                    <li>{props.currentPage}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroPage;
