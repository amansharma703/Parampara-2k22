import React from "react";
import "../css/gall.css";

const VideoGallery = () => {
  return (
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 ml-auto">
            <div class="section-title-header text-center">
              <h1
                class="section-title wow fadeInUp animated"
                data-wow-delay="0.2s"
              >
                Video <b>Gallery</b>
              </h1>
              <p class="wow fadeInUp " data-wow-delay="0.2s">
                Some masterful creations by our team!
              </p>
            </div>
          </div>
        </div>

        <div
          class="row justify-content-center work-item wow fadeIn"
          data-wow-delay="0.2s"
        >
          <div class="text-center col-12 col-md-10 ml-auto d-flex flex-wrap">
            <div className="px-1 col-12 col-md-6 ">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/UnNOs_Sv2PA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <div className="col-12 col-md-6 px-1">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/rrGcRokQ2a0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
