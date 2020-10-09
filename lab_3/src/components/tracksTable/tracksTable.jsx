import React from "react";
import "./stylesTracksTable.scss";
import Track from "./track";
import tracks from '../../data/beats.json';

const TracksTable = () =>
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
                    <td>
                        TAGS
                    </td>
                    <td/>
                </tr>
                {tracks.map(track => <Track track={track}/>)}
            </table>
        </div>
    );

export default TracksTable;
