import React, {useState} from "react";
import Header from "../../components/Header";

import {
    Switch,
    Route,
    BrowserRouter as Router
} from "react-router-dom";

import Footer from "../../components/footer/footer";
import tracks from '../../data/beats.json';
import ReactJkMusicPlayer from "react-jinke-music-player";
import 'react-jinke-music-player/assets/index.css';
import 'react-jinke-music-player/lib/styles/index.less'

import MainPage from "../../pages/MainPage";
import ContactPage from "../../pages/ContactPage/contactPage";
import LoginPage from "../../pages/authPages/LoginPage";
import RegisterPage from "../../pages/authPages/RegisterPage";



for(let i in tracks){
    tracks[i].index = i;
}

const Routing = () => {
    const[audioInstance, setAudioInstance] = useState(null);
    const[selectedTrack, setSelectedTrack] = useState(null);

    return(
        <Router>
            <Header/>
            <ReactJkMusicPlayer onAudioPause={() => {
                setSelectedTrack(null)
            }} mode={"full"} autoPlay={false} audioLists={tracks.map((track) => {
                return({
                    name: track.name,
                    musicSrc: track.audioUrl,
                    cover: track.imgUrl
                })
            })} getAudioInstance={(instance) => {
                setAudioInstance(instance)
            }}/>
            <Switch>
                <Route exact path="/" component={() => <MainPage tracks={tracks} instance={audioInstance} selectedTrack={selectedTrack} setSelectedTrack={setSelectedTrack}/>}/>
                <Route exact path="/contact" component={ContactPage}/>
                <Route exact path="/login" component={LoginPage}/>
                <Route exact path="/register" component={RegisterPage}/>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default Routing;
