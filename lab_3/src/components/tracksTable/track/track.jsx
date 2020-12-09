import React, {useState} from "react";
import "./stylesTrack.scss";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Track = ({track, instance, selectedTrack, setSelectedTrack}) => {
    //const[track, setAudioInstance] = useState(null);

    return(
        <tr className={selectedTrack === track.index ? "selected_tr" : ""} onClick={() => {
            if (selectedTrack === track.index) {
                setSelectedTrack(null);
                instance.pause();
            } else {
                instance.playByIndex(track.index);
                setSelectedTrack(track.index);
            }
        }}>
            <td className="td-img">
                <img src={track.imgUrl}/>
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
                    <FontAwesomeIcon icon={faShoppingCart}/>ADD
                </button>
            </td>
        </tr>
    );
}


export default Track;
