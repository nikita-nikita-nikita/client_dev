import React from "react";
import BigSearch from "../../components/bigSearch";
import TracksTable from "../../components/tracksTable";
import PriceCards from "../../components/priceCards";
import MainPageContact from "../../containers/MainPageContact";

const MainPage = () =>
    (
        <>
            <BigSearch/>
            <TracksTable tracks={[23, 3243]}/>
            <PriceCards/>
            <MainPageContact/>
        </>
    );

export default MainPage;
