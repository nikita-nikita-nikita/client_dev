import React from "react";
import "./stylesTrack.scss";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import tracks from "../../../data/beats.json";

const Track = (track) =>
    (
        <tr>
            <td className="td-img">
                <img src={track.track.imgUrl}/>
            </td>
            <td className="title">
                {track.track.name}
            </td>
            <td className="time">
                {track.track.time}
            </td>
            <td className="bpm">
                {track.track.bpm}
            </td>
            <td className="tags">
                {track.track.tags.map(tag => <b className="tag">#{tag}</b>)}
            </td>
            <td className="add-to-cart">
                <button className="cart_button">
                    <FontAwesomeIcon icon={faShoppingCart}/>ADD
                </button>
            </td>
        </tr>
    );

export default Track;
