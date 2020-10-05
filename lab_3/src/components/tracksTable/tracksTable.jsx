import React from "react";
import "./stylesTracksTable.scss";
import Track from "./track";

const TracksTable = ({tracks}) =>
    (
        <div className="tracks-table">
            <table cellSpacing={0}>
                <tr className="table-head">
                    <td/>
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
                    <td/>
                </tr>
                <Track/>
                <Track/>
            </table>
        </div>
    );

export default TracksTable;
