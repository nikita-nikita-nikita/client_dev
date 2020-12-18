import React, {useState} from "react";
import "./stylesTrack.scss";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {setAudioInstance, setSelectedTrack, setPreviousTrack, addedToCart} from "../../../redux/actions";
import LicenseTypeModal from "../../LicenseTypeModal";
import {connect} from "react-redux";

const Track = ({track, audio, setSelectedTrack, setPreviousTrack, addedToCart}) => {

    const [modalShow, setModalShow] = useState(false);

    if (audio.selectedTrack === null && audio.previousTrack === track.id) {
        audio.audioInstance.pause();
    }

    if (audio.selectedTrack === track.id) {
        if (audio.previousTrack !== track.id) {
            audio.audioInstance.playByIndex(track.id - 1);
        } else {
            audio.audioInstance.play();
        }
    }

    // Playback functionality
    const PlayBack = () => {
        if (audio.selectedTrack === track.id) {
            setSelectedTrack(null);
            setPreviousTrack(track.id);

        } else {
            setSelectedTrack(track.id);
            setPreviousTrack(audio.selectedTrack);
        }

        audio.audioInstance.play();
    }
    return (
        <tr className={track.id === audio.selectedTrack ? "selected_tr" : ""} onClick={(e) => {
            PlayBack();
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
                <button className="cart_button" onClick={(e) => {
                    e.stopPropagation();

                    setModalShow(true);
                }}>
                    <FontAwesomeIcon icon={faShoppingCart}/> ADD
                </button>
                <LicenseTypeModal key={track.id} track={track} buttonClass="cart_button" show={modalShow} setOpen={setModalShow}/>
            </td>
        </tr>

    );
}

const mapStateToProps = (audio) => audio;

const mapDispatchToProps = {
    setSelectedTrack,
    setPreviousTrack,
    addedToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Track);
