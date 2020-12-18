import React, {useState} from "react";
import "./stylesTrack.scss";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {setAudioInstance, setSelectedTrack, addedToCart} from "../../../redux/actions";
import LicenseTypeModal from "../../LicenseTypeModal";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

const Track = (props) => {
    const audio = useSelector(state => state.audio);
    const dispatch = useDispatch();
    const [modalShow, setModalShow] = useState(false);


    // Playback functionality
    const PlayBack = (selectedTrack) => {
        if (selectedTrack === props.track.id || selectedTrack === null) { // Set up current track utility
            console.log("STOP");

            switch (selectedTrack) {
                case null: {
                    audio.audioInstance.playByIndex(props.track.id - 1);
                    dispatch(setSelectedTrack(props.track.id));
                    break;
                }
                default: {
                    audio.audioInstance.pause();
                    dispatch(setSelectedTrack(null));
                }
            }

            console.log("STOOOOOOOOOOOOOOOP");
        } else {
            dispatch(setSelectedTrack(props.track.id));

            audio.audioInstance.playByIndex(props.track.id - 1);
        }
    }
    return (
        <tr className={props.track.id === audio.selectedTrack ? "selected_tr" : ""} onClick={() => {
            PlayBack(audio.selectedTrack)
        }}>
            <td className="td-img">
                <img className="td-img-main" src={props.track.imgUrl} alt="beat image"/>

            </td>
            <td className="title">
                {props.track.name}
            </td>
            <td className="time">
                {props.track.time}
            </td>
            <td className="bpm">
                {props.track.bpm}
            </td>
            <td className="tags">
                {props.track.tags.map((tag, i) => <b key={i} className="tag">#{tag}</b>)}
            </td>
            <td className="add-to-cart">
                <button className="cart_button" onClick={() => {

                    dispatch(addedToCart({
                        track: props.track,
                        amount: "",
                        licenseType: "MP3 LEASE"

                    }));

                    setModalShow(true);
                }}>
                    <FontAwesomeIcon icon={faShoppingCart}/> ADD
                </button>
                <LicenseTypeModal track={props.track} buttonClass="cart_button" show={modalShow}/>
            </td>
        </tr>

    );
}


export default Track;
