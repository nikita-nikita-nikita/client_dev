import React, {useState} from "react";
import "./stylesTrack.scss";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {setAudioInstance, setSelectedTrack, addedToCart} from "../../../redux/actions";

import {useDispatch} from "react-redux";

const Track = ({track, instance, selectedTrack}) => {

    const dispatch = useDispatch();

    // Playback functionality
    const PlayBack = ({track, instance, selectedTrack,}) => {
        console.log("PLAY BACK!");
        if (selectedTrack === track.id) { // Set up current track utility
            console.log("STOP");

            dispatch(setSelectedTrack(null));
            instance.pause();
        } else {
            console.log("PLAY BY INDEX");
            instance.playByIndex(track.id - 1);
            dispatch(setSelectedTrack(track.id));
        }
    }
    return (
        <tr className={selectedTrack === track.id ? "selected_tr" : ""} onClick={() => {
            PlayBack({track, instance, selectedTrack})
        }}>
            <td className="td-img">
                <img className="td-img-main" src={track.imgUrl} alt="beat image"/>
            </td>
            <td className="title">
                {track.name}
            </td>
            <td className="time">
                {track.time}
            </td>
            <td className="bpm">
                {track.bpm}
            </td>
            <td className="tags">
                {track.tags.map(tag => <b className="tag">#{tag}</b>)}
            </td>
            <td className="add-to-cart">
                <button className="cart_button" onClick={() => dispatch(addedToCart({track: track, licenseType: "gavno"}))}>
                    <FontAwesomeIcon icon={faShoppingCart}/> ADD
                </button>
            </td>
        </tr>

    );
}


export default Track;
