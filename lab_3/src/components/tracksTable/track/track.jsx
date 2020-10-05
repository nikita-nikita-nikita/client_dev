import React from "react";
import "./stylesTrack.scss";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Track = () =>
    (
        <tr>
            <td className="td-img">
                <img src="https://i.imgur.com/W6MT8iR.png"/>
            </td>
            <td className="title">
                Title
            </td>
            <td className="time">
                3:14
            </td>
            <td className="bpm">
                0
            </td>
            <td className="tags">
                <b className="tag">#lol</b>
                <b className="tag">#kek</b>
                <b className="tag">#cheburek</b>
            </td>
            <td className="add-to-cart">
                <button className="cart_button">
                    <FontAwesomeIcon icon={faShoppingCart}/>ADD
                </button>
            </td>
        </tr>
    );

export default Track;
