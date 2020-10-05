import React from "react";
import "./stylesTracksTable.scss";
import Track from "./track";

const TracksTable = ({tracks}) =>
    (
        <div className="tracks-table">
            <table cellSpacing={0} id="top-10-track-table">
                <tr className="table-head">
                    <td/>
                    <td className="title">
                        TITLE
                    </td>
                    <td className="time">
                        TIME
                    </td>
                    <td className="bpm">
                        BPM
                    </td>
                    <td className="tags">
                        TAGS
                    </td>
                    <td/>
                </tr>
                <Track/>
                <Track/>
            </table>
        </div>
    );

export default TracksTable;
