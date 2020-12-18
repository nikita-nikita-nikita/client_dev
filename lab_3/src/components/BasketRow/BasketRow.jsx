import React, {useState} from "react";
import './styleBasketRow.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes, faPlayCircle, faPauseCircle} from "@fortawesome/free-solid-svg-icons";
import {LicenseBox} from "../priceCards";
import {Table} from "semantic-ui-react";
import {useDispatch} from "react-redux";
import {removedFromCart, setPreviousTrack} from "../../redux/actions";
import {setSelectedTrack} from "../../redux/actions";
import {useSelector} from "react-redux";
import {TransitionablePortal} from "semantic-ui-react";

const BasketRow = ({id, product, amount, licenseType, imgUrl, show}) => {
    const audio = useSelector(state => state.audio);
    const [isAnimated, setAnimation] = React.useState(false);

    const dispatch = useDispatch();

    if (audio.selectedTrack === null && audio.previousTrack === id) {
        audio.audioInstance.pause();
    }

    if (audio.selectedTrack === id) {
        if (audio.previousTrack !== id) {
            audio.audioInstance.playByIndex(id - 1);
        } else {
            audio.audioInstance.play();
        }
    }
    const PlayBack = () => {
        if (audio.selectedTrack === id) {
            dispatch(setSelectedTrack(null))
            dispatch(setPreviousTrack(id));

        } else {
            dispatch(setSelectedTrack(id))
            dispatch(setPreviousTrack(audio.selectedTrack));
        }

        audio.audioInstance.play();
    }

    return (
        <Table.Row className="main-row">
            <Table.Cell verticalAlign="middle" textAlign="center" className="img-container row-item" sm={2}>
                <button className='play-button-cart' onClick={
                    () => {
                        PlayBack(id, audio.audioInstance, audio.selectedTrack)
                    }
                }>
                    <FontAwesomeIcon icon={audio.selectedTrack === id ? faPauseCircle : faPlayCircle}/>
                </button>
                <img className='img-cart'
                     src={imgUrl}
                     alt="Track"/>
            </Table.Cell>
            <Table.Cell textAlign="left" verticalAlign="middle" className="row-item">
                {product}
            </Table.Cell>
            <Table.Cell textAlign="center" verticalAlign="middle" className="row-item">
                {licenseType}
            </Table.Cell>
            <Table.Cell textAlign="center" verticalAlign="middle" className="row-item">
                {amount}
            </Table.Cell>
            <Table.Cell textAlign="center" width={1} verticalAlign="middle" className="row-item button-license">
                <LicenseBox className="button" text="License"/>
            </Table.Cell>
            <Table.Cell width={1} verticalAlign="middle" textAlign="center"
                        className="row-item remove-from-cart-button-container">
                <button className="remove-from-cart-button" onClick={() => {
                    setAnimation(true);
                    dispatch(removedFromCart(id))
                }}>
                    <FontAwesomeIcon className='basket__remove-item' icon={faTimes}/>
                </button>
            </Table.Cell>
        </Table.Row>
    )
}

export default BasketRow;