import React from "react";
import BigSearch from "../../components/bigSearch";
import TracksTable from "../../components/tracksTable";
import Tracks from "../../services/tracksFromJSON"

const MainPage = () =>
    (
        <>
            <BigSearch/>
            <TracksTable tracks={[23,3243]}/>
        </>
    );

export default MainPage;
