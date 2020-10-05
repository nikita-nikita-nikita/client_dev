import React from "react";
import Header from "../../components/Header";
import {
    Switch,
    Route
} from "react-router-dom";
import MainPage from "../MainPageContainer";

const Routing = () => (
    <>
        <Header/>
        <Switch>
            <Route path="/" component={MainPage}/>
        </Switch>
    </>
);

export default Routing;
