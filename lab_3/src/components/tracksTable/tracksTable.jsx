import React, {useState} from "react";
import "./stylesTracksTable.scss";
import Track from "./track";
import tracks from '../../data/beats.json';
import ReactJkMusicPlayer from "react-jinke-music-player";
import 'react-jinke-music-player/assets/index.css';

for(let i in tracks){
    tracks[i].index = i;
}

const TracksTable = () =>{
    const[audioInstance, setAudioInstance] = useState(null);
    const[selectedTrack, setSelectedTrack] = useState(null);

    return (
        <div className="tracks-table">
            {process.env.PUBLIC_URL}
            <ReactJkMusicPlayer autoPlay={false} audioLists={tracks.map((track) => {
                return({
                    name: track.name,
                    musicSrc: track.audioUrl,
                    cover: track.imgUrl
                })
            })}getAudioInstance={(instance) => {
                setAudioInstance(instance)
            }}/>
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
                {tracks.map(track => <Track track={track} instance={audioInstance} selectedTrack={selectedTrack} setSelectedTrack={setSelectedTrack}/>)}
            </table>
        </div>
    );
}


export default TracksTable;
