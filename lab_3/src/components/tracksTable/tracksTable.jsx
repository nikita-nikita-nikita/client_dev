import React from "react";
import "./stylesTracksTable.scss";
import Track from "./track"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const TracksTable = ({tracks}) =>
    (
        <div className="tracks-table">
            <table cellSpacing={0}>
                <tr className="table-head">
                    <td></td>
                    <td>
                        TITLE
                    </td>
                    <td>
                        TIME
                    </td>
                    <td>
                        BPM
                    </td>
                    <td>
                        TAGS
                    </td>
                    <td></td>
                </tr>
                <Track/>
                <Track/>
            </table>
        </div>
    );

export default TracksTable;
