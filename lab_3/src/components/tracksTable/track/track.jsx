import React, {useState} from "react";
import "./stylesTrack.scss";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {setAudioInstance, setSelectedTrack, addedToCart} from "../../../redux/actions";
import LicenseTypeModal from "../../LicenseTypeModal";
import {connect} from "react-redux";

const Track = ({track, audio, setSelectedTrack, addedToCart}) => {

    const [modalShow, setModalShow] = useState(false);

    // Playback functionality
    const PlayBack = (selectedTrack) => {
        if (selectedTrack === track.id) { // Set up current track utility

            audio.audioInstance.pause();
            setSelectedTrack(null);

        } else {
            setSelectedTrack(track.id);
            audio.audioInstance.playByIndex(track.id - 1);
        }
    }
    return (
        <tr className={track.id === audio.selectedTrack ? "selected_tr" : ""} onClick={() => {
            PlayBack(audio.selectedTrack)
        }}>
            <td className="td-img">
                <img className="td-img-main" src={track.imgUrl} alt="beat image"/>
            </td>
            <td className="title">
                {track.name}
            </td>
            <td className="time">
                {track.time}
            </td>
            <td className="bpm">
                {track.bpm}
            </td>
            <td className="tags">
                {track.tags.map((tag, i) => <b key={i} className="tag">#{tag}</b>)}
            </td>
            <td className="add-to-cart">
                <button className="cart_button" onClick={() => {

                    addedToCart({
                        track: track,
                        amount: "",
                        licenseType: "MP3 LEASE"
                    });

                    setModalShow(true);
                }}>
                    <FontAwesomeIcon icon={faShoppingCart}/> ADD
                </button>
                <LicenseTypeModal key={track.id} track={track} buttonClass="cart_button" show={modalShow}/>
            </td>
        </tr>

    );
}

const mapStateToProps = (audio) => audio;
const mapDispatchToProps = {
    setSelectedTrack,
    addedToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Track);
