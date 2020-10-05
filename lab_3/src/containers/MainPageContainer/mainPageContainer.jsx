import React from "react";
import BigSearch from "../../components/bigSearch";
import TracksTable from "../../components/tracksTable";
import PriceCards from "../../components/priceCards";

const MainPage = () =>
    (
        <>
            <BigSearch/>
            <TracksTable tracks={[23, 3243]}/>
            <PriceCards/>
        </>
    );

export default MainPage;
