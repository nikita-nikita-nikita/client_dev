import React from "react";
import "./stylesTracksTable.scss";
import Track from "./track"

const TracksTable = ({tracks}) =>
    (
        <div className="tracks-table">
            <table cellSpacing={0}>
                <Track/>
                <Track/>
            </table>
        </div>
    );

export default TracksTable;
