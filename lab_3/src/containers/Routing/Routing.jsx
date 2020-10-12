import React from "react";
import Header from "../../components/Header";
import {
    Switch,
    Route,
    BrowserRouter as Router
} from "react-router-dom";
import MainPage from "../../pages/MainPage";

const Routing = () => (
    <Router>
        <Header/>
        <Switch>
            <Route exact path="/" component={MainPage}/>
        </Switch>
    </Router>
);

export default Routing;
