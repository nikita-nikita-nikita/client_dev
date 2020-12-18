import React, {useState} from 'react';
import './license-type-modal.scss';
import {Row, Col} from 'react-bootstrap'
import {Button, Header, Icon, Modal} from 'semantic-ui-react'
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart, faDotCircle} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {addedToCart} from "../../redux/actions";
import {TransitionablePortal} from "semantic-ui-react";

const LicenseTypeModal = (props) => {

    let show = props.show;
    const setOpen = props.setOpen;

    const dispatch = useDispatch();
    console.log(show);

    const prices = useSelector(state => state.pricesList);

    return (
        <TransitionablePortal open={show} transition={{animation: 'slide down', duration: 300}}>
            <Modal
                dimmer="blurring"
                className="license__main-modal-container"
                basic
                open={true}
                size='small'
                centered
            >
                <Modal.Content className="licenses-container">
                    <div className="licenses-container">
                        <Row className="track-description-container">
                            <Col xl={1} md={2} sm={2} className="license__img-container">
                                <img className="license__img-main" src={props.track.imgUrl} alt="track"/>
                            </Col>
                            <Col xl={6} md={4} sm={4} className="license__beat_information">
                                <div className="license__beat-name">
                                    <span className="license__green">Track name:</span> {props.track.name}
                                </div>
                                <div className="license__author-name">
                                    <span className="license__green">Author:</span> Cherries
                                </div>
                                <div className="license__tags-container">
                                    <span>Tags:</span> {props.track.tags.map((tag, i) => <span key={i}
                                                                                               className="tag">#{tag}</span>)}
                                </div>
                                <div className="license__bpm">
                                    <span className="license_bpm-caption">BPM: </span> {props.track.bpm}
                                </div>
                            </Col>
                        </Row>
                        <Row>

                            <Col xl={3} md={4} sm={12}>
                                <button onClick={(e) => {
                                    e.stopPropagation();

                                    dispatch(addedToCart({
                                        track: props.track,
                                        amount: prices[0].price,
                                        licenseType: "MP3 LEASE"

                                    }));
                                    setOpen(false);
                                }
                                }
                                        className="license-button-choice mp3-lease">
                                    <div className="license__choice-caption">MP3 LEASE</div>
                                    <div className="license__choice-price">$29.90</div>
                                    <div className="license__choice-desc">MP3</div>
                                    <div className="popup">CLICK TO ADD IN YOUR CART</div>
                                </button>
                            </Col>
                            <Col xl={3} md={4} sm={12}>
                                <button onClick={(e) => {
                                    e.stopPropagation();

                                    dispatch(addedToCart({
                                        track: props.track,
                                        amount: prices[1].price,
                                        licenseType: "WAV LEASE"
                                    }));
                                    setOpen(false);
                                }
                                }
                                        type="button" className="license-button-choice wav-lease">
                                    <div className="license__choice-caption">WAV LEASE</div>
                                    <div className="license__choice-price">$39.90</div>
                                    <div className="license__choice-desc">MP3 AND WAV</div>
                                    <div className="popup">CLICK TO ADD IN YOUR CART</div>

                                </button>
                            </Col>
                            <Col xl={3} md={4} sm={12}>
                                <button onClick={(e) => {
                                    e.stopPropagation();

                                    dispatch(addedToCart({
                                        track: props.track,
                                        amount: prices[2].price,
                                        licenseType: "TRACKED OUT LEASE"
                                    }));
                                    setOpen(false);
                                }
                                }
                                        type="button" className="license-button-choice tracked-out-lease">
                                    <div className="license__choice-caption">TRACKED OUT LEASE</div>
                                    <div className="license__choice-price">$99.90</div>
                                    <div className="license__choice-desc">MP3, WAV AND TRACK STEMS</div>
                                    <div className="popup">CLICK TO ADD IN YOUR CART</div>

                                </button>
                            </Col>
                            <Col xl={3} md={6} sm={12}>
                                <button onClick={(e) => {
                                    e.stopPropagation();

                                    dispatch(addedToCart({
                                        track: props.track,
                                        amount: prices[3].price,
                                        licenseType: "UNLIMITED LEASE"
                                    }));
                                    setOpen(false);
                                }
                                } type="button" className="license-button-choice unlimited-lease">
                                    <div className="license__choice-caption">UNLIMITED LEASE</div>
                                    <div className="license__choice-price">$199.90</div>
                                    <div className="license__choice-desc">MP3, WAV AND TRACK STEMS</div>
                                    <div className="popup">CLICK TO ADD IN YOUR CART</div>

                                </button>
                            </Col>

                            <Col xl={12} md={6} sm={12}>
                                <button onClick={(e) => e.stopPropagation()} type="button"
                                        className="license-button-choice unlimited-lease">
                                    <div className="license__choice-caption">EXCLUSIVE</div>
                                    <div className="license__choice-price">~</div>
                                    <div className="license__choice-desc">JUST CONTACT ME VIA CONTACT FORM OR USING
                                        EMAIL/INSTAGRAM
                                    </div>
                                    <div className="popup">CLICK TO GO TO CONTACT PAGE</div>

                                </button>
                            </Col>
                        </Row>
                    </div>
                </Modal.Content>
                <Modal.Actions>
                    <Button basic color='green' className="license__choice-close-button" inverted
                            onClick={(e) => {
                                e.stopPropagation();

                                setOpen(false)
                            }}>
                        <div className="license__close-button-icon"><FontAwesomeIcon icon={faTimes}/> Close</div>
                    </Button>
                </Modal.Actions>
            </Modal>
        </TransitionablePortal>
    )
}

export default LicenseTypeModal;

