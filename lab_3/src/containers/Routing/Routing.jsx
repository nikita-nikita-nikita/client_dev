import React, {useEffect} from "react";
import Header from "../../components/Header";


import {
    Switch,
    Route,
    BrowserRouter as Router
} from "react-router-dom";

import Footer from "../../components/footer/footer";
import ReactJkMusicPlayer from "react-jinke-music-player";
import 'react-jinke-music-player/assets/index.css';
import 'react-jinke-music-player/lib/styles/index.less'

import MainPage from "../../pages/MainPage";
import ContactPage from "../../pages/ContactPage";
import LoginPage from "../../pages/authPages/LoginPage";
import RegisterPage from "../../pages/authPages/RegisterPage";
import CheckoutPage from "../../pages/checkoutPage";

import getTracks from "../../services/tracks";
import getPrices from "../../services/prices";

// redux
import {connect, useSelector} from 'react-redux';
import {
    beatsFetched,
    setAudioInstance,
    setSelectedTrack,
    pricesFetched, loggedIn
} from '../../redux/actions';


const Routing = ({setAudioInstance, setSelectedTrack, beatsFetched, pricesFetched, beatList, loggedIn}) => {

    useEffect( () => {
        if(localStorage.getItem('token')) loggedIn();
    }, [])

    getTracks.then((message) => {
        beatsFetched(message.data);
    }, console.log);

    getPrices.then((message) => {
        pricesFetched(message.data)
    }, console.log)

    return (
        <Router>
            <Header/>
            <ReactJkMusicPlayer
                onAudioPause={() => {
                    setSelectedTrack(null);
                }}
                mode={"full"}
                autoPlay={false}
                audioLists={beatList.map((track) => {
                    return ({
                        name: track.name,
                        musicSrc: track.audioUrl,
                        cover: track.imgUrl
                    })
                })}
                getAudioInstance={(instance) => {
                    setAudioInstance(instance);
                }}/>
            <Switch>

                <Route exact path="/"
                       component={() => <MainPage/>}/>
                <Route exact path="/contact" component={ContactPage}/>
                <Route exact path="/login" component={LoginPage}/>
                <Route exact path="/register" component={RegisterPage}/>
                <Route exact path="/checkout"
                       component={() => <CheckoutPage/>}/>
            </Switch>
            <Footer/>
        </Router>
    );
}

const mapStateToProps = ({beatList}) => {
    return beatList;
}

const mapDispatchToProps = {
    beatsFetched,
    setSelectedTrack,
    setAudioInstance,
    pricesFetched,
    loggedIn
};

export default connect(mapStateToProps, mapDispatchToProps)(Routing);
