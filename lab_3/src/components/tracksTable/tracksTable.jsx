import React, {useState} from "react";
import "./stylesTracksTable.scss";
import Track from "./track";
import {connect, useSelector} from 'react-redux';

const TracksTable = ({beatList, audio}) => {

    const search = useSelector(state => state.search);


    return (
        <div className="tracks-table">
            <table cellSpacing={0} id="top-10-track-table">
                <tbody>
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
                        beatList.beatList.map((beat) => {
                                return filter(beat, search.query) ? <Track key={beat.id}
                                                                           track={beat}
                                /> : null;
                            }
                        )
                    }</tbody>
            </table>
        </div>
    );
}

const filter = (beat, q) => {

    if (q === "") {
        return true;
    }

    const queries = q.split(" ");

    for (let query of queries) {
        if (
            (query !== "") &&
            ((beat.name.toLowerCase().includes(query.toLowerCase())) ||
                (beat.bpm.toString().includes(query.toLowerCase())) ||
                (beat.tags.join(" ").toLowerCase().includes(query.toLowerCase())))
        )
            return true;
    }

    return false;
}

const mapStateToProps = ({beatList, audio}) => ({
    beatList,
    audio
});

export default connect(mapStateToProps)(TracksTable);
