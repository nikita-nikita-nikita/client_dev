import React from 'react';
import './license-type-modal.scss';
import {Row, Col} from 'react-bootstrap'
import {Button, Header, Icon, Modal} from 'semantic-ui-react'
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart, faDotCircle} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {addedToCart} from "../../redux/actions";

const LicenseTypeModal = (props) => {
    const [open, setOpen] = React.useState(false)
    const dispatch = useDispatch();

    return (
        <Modal
            dimmer="blurring"
            className="license__main-modal-container"
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='small'
            centered
            trigger={
                <button className={props.buttonClass} onClick={() => setOpen(true)}>
                    <FontAwesomeIcon icon={faShoppingCart}/> ADD
                </button>}
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
                                <span>Tags:</span> {props.track.tags.map(tag => <span className="tag">#{tag}</span>)}
                            </div>
                            <div className="license__bpm">
                                <span className="license_bpm-caption">BPM: </span> {props.track.bpm}
                            </div>
                        </Col>
                    </Row>
                    <Row>

                        <Col xl={3} md={4} sm={12}>
                            <button onClick={() => console.log("CLICK LICENSE")}
                                    className="license-button-choice mp3-lease">
                                <div className="license__choice-caption">MP3 LEASE</div>
                                <div className="license__choice-price">$29.90</div>
                                <div className="license__choice-desc">MP3</div>
                                <div className="popup">CLICK TO ADD IN YOUR CART</div>
                            </button>
                        </Col>
                        <Col xl={3} md={4} sm={12}>
                            <button type="button" className="license-button-choice wav-lease">
                                <div className="license__choice-caption">WAV LEASE</div>
                                <div className="license__choice-price">$39.90</div>
                                <div className="license__choice-desc">MP3 AND WAV</div>
                                <div className="popup">CLICK TO ADD IN YOUR CART</div>

                            </button>
                        </Col>
                        <Col xl={3} md={4} sm={12}>
                            <button type="button" className="license-button-choice tracked-out-lease">
                                <div className="license__choice-caption">TRACKED OUT LEASE</div>
                                <div className="license__choice-price">$99.90</div>
                                <div className="license__choice-desc">MP3, WAV AND TRACK STEMS</div>
                                <div className="popup">CLICK TO ADD IN YOUR CART</div>

                            </button>
                        </Col>
                        <Col xl={3} md={6} sm={12}>
                            <button type="button" className="license-button-choice unlimited-lease">
                                <div className="license__choice-caption">UNLIMITED LEASE</div>
                                <div className="license__choice-price">$199.90</div>
                                <div className="license__choice-desc">MP3, WAV AND TRACK STEMS</div>
                                <div className="popup">CLICK TO ADD IN YOUR CART</div>

                            </button>
                        </Col>

                        <Col xl={12} md={6} sm={12}>
                            <button type="button" className="license-button-choice unlimited-lease">
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
                <Button basic color='white' className="license__choice-close-button" inverted
                        onClick={() => setOpen(false)}>
                    <div className="license__close-button-icon"><FontAwesomeIcon icon={faTimes}/> Close</div>
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default LicenseTypeModal;

