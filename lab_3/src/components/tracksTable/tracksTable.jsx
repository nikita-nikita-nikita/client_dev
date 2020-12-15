import React, {useState} from "react";
import "./stylesTracksTable.scss";
import Track from "./track";
import {connect} from 'react-redux';


const TracksTable = ({beatList, audio}) => {

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
                {
                    beatList.beatList.map(beat => <Track key={beat.id}
                                                track={beat}
                                                instance={audio.audioInstance}
                                                selectedTrack={audio.selectedTrack}/>
                    )
                }
            </table>
        </div>
    );
}

const mapStateToProps = ({beatList, audio}) => ({
    beatList,
    audio
});

export default connect(mapStateToProps)(TracksTable);
