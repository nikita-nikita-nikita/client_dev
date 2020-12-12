import React, {useState} from "react";
import "./stylesTracksTable.scss";
import {Track} from "./track";

const TracksTable = ({tracks, instance, selectedTrack, setSelectedTrack}) =>{
    return (
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
                { tracks.map(track => <Track track={track}
                                            instance={instance}
                                            selectedTrack={selectedTrack}
                                            setSelectedTrack={setSelectedTrack}/>
                                            )
                }
            </table>
        </div>
    );
}


export default TracksTable;
