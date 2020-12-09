import React from "react";
import BigSearch from "../../components/bigSearch";
import TracksTable from "../../components/tracksTable";
import {PriceCards} from "../../components/priceCards";
import MainPageContact from "../../containers/MainPageContact";

const MainPage = ({tracks, instance, selectedTrack, setSelectedTrack}) =>
    (
        <>
                <BigSearch/>
                <TracksTable tracks={tracks} instance={instance} selectedTrack={selectedTrack} setSelectedTrack={setSelectedTrack}/>
                <PriceCards/>
                <MainPageContact/>
        </>
    );

export default MainPage;
