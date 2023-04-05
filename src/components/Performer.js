import React from "react";
import Tilt from "react-parallax-tilt";

const Performer = () => {
  const performerImg = [
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/parampara-48b01.appspot.com/o/Highlighted%20event%2F8.png?alt=media&token=12be4229-c654-48f3-aefd-4c1de11cf801",
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/parampara-48b01.appspot.com/o/Highlighted%20event%2F9.png?alt=media&token=953b3ea1-34c9-438e-a381-09847b6c2fdd",
    },
    {
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/parampara-48b01.appspot.com/o/Highlighted%20event%2F10.png?alt=media&token=60a11621-a0a7-49f4-a005-0b1191a69a96",
    },
  ];
  return (
    <>
      {/* <!-- performar_area_start  --> */}
      <div id="performer" className="performar_area bg-black-gradient ">
        <div className="container ">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title mb-75">
                <h3
                  className="wow fadeInUp "
                  data-wow-duration="1s"
                  data-wow-delay=".3s"
                >
                  Highlights
                </h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row">
                {performerImg.map((item, index) => {
                  return (
                    <Tilt
                      key={index}
                      className=" col-lg-4 col-md-6 my-2 "
                      options={{ max: 60 }}
                    >
                      <div className="">
                        <div
                          className="single_performer wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".3s"
                        >
                          <div className="thumb">
                            <img src={item.imgSrc} alt="" />
                          </div>
                        </div>
                      </div>
                    </Tilt>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- performar_area_end  --> */}
    </>
  );
};

export default Performer;
