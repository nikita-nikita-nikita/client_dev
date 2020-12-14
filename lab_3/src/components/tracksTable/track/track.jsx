import React, {useState} from "react";
import "./stylesTrack.scss";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Track = ({track, instance, selectedTrack, setSelectedTrack}) => {
    //const[track, setAudioInstance] = useState(null);

    return (
        <tr className={selectedTrack === track.id ? "selected_tr" : ""} onClick={() => {
            PlayBack({track, instance, selectedTrack, setSelectedTrack})
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
                <button className="cart_button">
                    <FontAwesomeIcon icon={faShoppingCart}/> ADD
                </button>
            </td>
        </tr>
    );
}

// Playback functionality
const PlayBack = ({track, instance, selectedTrack, setSelectedTrack}) => {
    if (selectedTrack === track.id) { // Set up current track utility
        setSelectedTrack(null);
        instance.pause();
    } else {
        instance.playByIndex(track.id - 1);
        setSelectedTrack(track.id);
    }
}

export {Track, PlayBack};
