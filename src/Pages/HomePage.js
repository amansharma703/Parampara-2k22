import React from "react";
import HeroSlider from "../components/HeroSlider";
import Performer from "../components/Performer";
import ProgramDetails from "../components/ProgramDetails";
import ProgramTimeline from "../components/ProgramTimeline";
import Eventschedule from "../components/Eventschedule";
import Gall from "../components/Gall";
import MobilePromo from "../components/MobilePromo";
import Map from "../components/Map";
import VideoGallery from "../components/VideoGallery";

const HomePage = () => {
    return (
        <>
            <HeroSlider name='Parampara 2k23' message='We are back with a Bang!' />
            <Performer />
            <ProgramDetails />
            <Eventschedule />
            <VideoGallery />
            <Gall />
            <Map />
            <MobilePromo />
            <ProgramTimeline />
        </>
    );
};

export default HomePage;
