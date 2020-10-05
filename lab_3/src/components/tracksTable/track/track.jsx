import React from "react";
import "./stylesTrack.scss";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Track = () =>
    (
        <tr>
            <td className="td-img">
                <img src="http://placehold.it/100x100"/>
            </td>
            <td>
                Title
            </td>
            <td>
                3:14
            </td>
            <td>
                0
            </td>
            <td>
                <b className="tag">#lol</b>
                <b className="tag">#kek</b>
                <b className="tag">#cheburek</b>
            </td>
            <td>
                <button className="cart_button"><FontAwesomeIcon icon={faShoppingCart}/> ADD</button>
            </td>
        </tr>
    );

export default Track;
