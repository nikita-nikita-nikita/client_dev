import React from "react";
import Header from "../../components/Header";
import {
    Switch,
    Route,
    BrowserRouter as Router
} from "react-router-dom";
import MainPage from "../../pages/MainPage";
import ContactPage from "../../pages/ContactPage/contactPage";

const Routing = () => (
    <Router>
        <Header/>
        <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/contact" component={ContactPage}/>
        </Switch>
    </Router>
);

export default Routing;
