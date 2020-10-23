import React from "react";
import Header from "../../components/Header";
import {
    Switch,
    Route,
    BrowserRouter as Router
} from "react-router-dom";

import Footer from "../../components/footer/footer";


import MainPage from "../../pages/MainPage";
import ContactPage from "../../pages/ContactPage/contactPage";
import LoginPage from "../../pages/authPages/LoginPage";
import RegisterPage from "../../pages/authPages/RegisterPage";

const Routing = () => (
    <Router>
        <Header/>

        <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/contact" component={ContactPage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/register" component={RegisterPage}/>
        </Switch>
        <Footer/>
    </Router>
);

export default Routing;
