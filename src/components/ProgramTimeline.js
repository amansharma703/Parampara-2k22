import React from "react";

const ProgramTimeline = (props) => {
    return (
        <>
            <div className="program_details_area detials_bg_1 overlay2 ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="section_title text-center mb-80  wow fadeInRight"
                                data-wow-duration="1s"
                                data-wow-delay=".3s"
                            >
                                <h3>Popular Events</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="program_detail_wrap">
                                <div className="single_propram">
                                    <div className="inner_wrap">
                                        <div className="circle_img"></div>
                                        <div className="porgram_top">
                                            <span
                                                className=" wow fadeInLeft"
                                                data-wow-duration="1s"
                                                data-wow-delay=".3s"
                                            >
                                                11.00-01.00 pm
                                            </span>
                                            <h4
                                                className=" wow fadeInLeft"
                                                data-wow-duration="1s"
                                                data-wow-delay=".4s"
                                            >
                                                7 Apr 2022
                                            </h4>
                                        </div>
                                        <div
                                            className="thumb wow fadeInLeft"
                                            data-wow-duration="1s"
                                            data-wow-delay=".5s"
                                        >
                                            <img src="img/program_details/1.png" alt="" />
                                        </div>
                                        <h4
                                            className="wow fadeInLeft"
                                            data-wow-duration="1s"
                                            data-wow-delay=".6s"
                                        >
                                            Code Monk
                                        </h4>
                                    </div>
                                </div>
                                <div className="single_propram">
                                    <div className="inner_wrap">
                                        <div className="circle_img"></div>
                                        <div className="porgram_top">
                                            <span
                                                className="wow fadeInRight"
                                                data-wow-duration="1s"
                                                data-wow-delay=".3s"
                                            >
                                                10.00-01.00 pm
                                            </span>
                                            <h4
                                                className="wow fadeInRight"
                                                data-wow-duration="1s"
                                                data-wow-delay=".4s"
                                            >
                                                8 Apr 2022
                                            </h4>
                                        </div>
                                        <div
                                            className="thumb wow fadeInRight"
                                            data-wow-duration="1s"
                                            data-wow-delay=".5s"
                                        >
                                            <img src="img/program_details/2.png" alt="" />
                                        </div>
                                        <h4
                                            className="wow fadeInRight"
                                            data-wow-duration="1s"
                                            data-wow-delay=".6s"
                                        >
                                            WebStack
                                        </h4>
                                    </div>
                                </div>
                                <div className="single_propram">
                                    <div className="inner_wrap">
                                        <div className="circle_img"></div>
                                        <div className="porgram_top">
                                            <span
                                                className=" wow fadeInLeft"
                                                data-wow-duration="1s"
                                                data-wow-delay=".3s"
                                            >
                                                10.00-04.00 pm
                                            </span>
                                            <h4
                                                className=" wow fadeInLeft"
                                                data-wow-duration="1s"
                                                data-wow-delay=".4s"
                                            >
                                                7, 8 Apr 2022
                                            </h4>
                                        </div>
                                        <div
                                            className="thumb  wow fadeInLeft"
                                            data-wow-duration="1s"
                                            data-wow-delay=".5s"
                                        >
                                            <img src="img/program_details/3.jpg" alt="" />
                                        </div>
                                        <h4
                                            className=" wow fadeInLeft"
                                            data-wow-duration="1s"
                                            data-wow-delay=".6s"
                                        >
                                            100m Race
                                        </h4>
                                    </div>
                                </div>
                                <div className="single_propram">
                                    <div className="inner_wrap">
                                        <div className="circle_img"></div>
                                        <div className="porgram_top">
                                            <span
                                                className="wow fadeInRight"
                                                data-wow-duration="1s"
                                                data-wow-delay=".3s"
                                            >
                                                10.00-02.30 pm
                                            </span>
                                            <h4
                                                className="wow fadeInRight"
                                                data-wow-duration="1s"
                                                data-wow-delay=".4s"
                                            >
                                                8 Feb 2020
                                            </h4>
                                        </div>
                                        <div
                                            className="thumb wow fadeInRight"
                                            data-wow-duration="1s"
                                            data-wow-delay=".5s"
                                        >
                                            <img src="img/program_details/4.jpg" alt="" />
                                        </div>
                                        <h4
                                            className="wow fadeInRight"
                                            data-wow-duration="1s"
                                            data-wow-delay=".6s"
                                        >
                                            Dancing
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProgramTimeline;
