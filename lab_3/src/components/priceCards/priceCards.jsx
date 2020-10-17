import React, {useState} from 'react';
import {Card, Image, Button} from 'semantic-ui-react';
import "./priceCards.scss";
import Accordion from 'react-bootstrap/Accordion'
import {faTag} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Switch from "react-bootstrap/Switch";
import Container from 'react-bootstrap/Container'

const PriceCards = () => {
    const [isActive, setActive] = useState(false);

    const buttonNameHandler = () => isActive ? "LESS" : "MORE";

    return (
        <Switch className="grid">
            <Card className="card">
                <div className="head">
                    <p>POPULAR</p>
                    <div className="license-type">
                        Unlimited Lease
                    </div>
                    <div className="price">
                        $219.99
                    </div>
                    <div className="per-unit">
                        PER UNIT
                    </div>
                </div>
                <div className="description">
                    <ul>
                        <li>Untagged Wav Track stems</li>
                        <li>Unlimited Distribution</li>
                        <li>Unlimited Commercial Use</li>
                        <li>Able to put song on all platforms (Spotify, Apple Music etc.)</li>
                        <li>Must Credit (prod. eddienubes)</li>
                    </ul>
                </div>
                <div className="card-footer">
                    <div className="card-footer-caption">
                        <span><FontAwesomeIcon className="icon" icon={faTag}/> BULK DEALS</span>
                        <p>BUY 2, GET 1 FREE</p>
                    </div>
                    <Accordion>
                        <Accordion.Collapse className="card-footer-content" eventKey="0">
                            <div>
                                <p>
                                    BUY 3, GET 2 FREE
                                </p>
                                <p>
                                    BUY 4, GET 3 FREE
                                </p>
                                <p>
                                    BUY 5, GET 4 FREE
                                </p>
                                <p>
                                    BUY 6, GET 5 FREE
                                </p>
                                <p>
                                    BUY 10, GET 10 FREE
                                </p>
                            </div>
                        </Accordion.Collapse>
                        <div className="button-container">
                            <Accordion.Toggle className="card-footer-button" as={Button} variant="link" eventKey="0"
                                              onClick={() => setActive(!isActive)}>
                                <span>{buttonNameHandler()}</span>
                            </Accordion.Toggle>
                        </div>

                    </Accordion>
                </div>

            </Card>
            <Card className="card">
                <div className="head">
                    <p>POPULAR</p>
                    <div className="license-type">
                        Unlimited Lease
                    </div>
                    <div className="price">
                        $219.99
                    </div>
                    <div className="per-unit">
                        PER UNIT
                    </div>
                </div>
                <div className="description">
                    <ul>
                        <li>Untagged Wav Track stems</li>
                        <li>Unlimited Distribution</li>
                        <li>Unlimited Commercial Use</li>
                        <li>Able to put song on all platforms (Spotify, Apple Music etc.)</li>
                        <li>Must Credit (prod. eddienubes)</li>
                    </ul>
                </div>
                <div className="card-footer">
                    <div className="card-footer-caption">
                        <span><FontAwesomeIcon className="icon" icon={faTag}/> BULK DEALS</span>
                        <p>BUY 2, GET 1 FREE</p>
                    </div>

                    <Accordion>
                        <Accordion.Collapse className="card-footer-content" eventKey="0">
                            <div>
                                <p>
                                    BUY 3, GET 2 FREE
                                </p>
                                <p>
                                    BUY 4, GET 3 FREE
                                </p>
                                <p>
                                    BUY 5, GET 4 FREE
                                </p>
                                <p>
                                    BUY 6, GET 5 FREE
                                </p>
                                <p>
                                    BUY 10, GET 10 FREE
                                </p>
                            </div>
                        </Accordion.Collapse>
                        <div className="button-container">
                            <Accordion.Toggle className="card-footer-button" as={Button} variant="link" eventKey="0"
                                              onClick={() => setActive(!isActive)}>
                                <span>{buttonNameHandler()}</span>
                            </Accordion.Toggle>
                        </div>

                    </Accordion>
                </div>

            </Card><Card className="card">
            <div className="head">
                <p>POPULAR</p>
                <div className="license-type">
                    Unlimited Lease
                </div>
                <div className="price">
                    $219.99
                </div>
                <div className="per-unit">
                    PER UNIT
                </div>
            </div>
            <div className="description">
                <ul>
                    <li>Untagged Wav Track stems</li>
                    <li>Unlimited Distribution</li>
                    <li>Unlimited Commercial Use</li>
                    <li>Able to put song on all platforms (Spotify, Apple Music etc.)</li>
                    <li>Must Credit (prod. eddienubes)</li>
                </ul>
            </div>
            <div className="card-footer">
                <div className="card-footer-caption">
                    <span><FontAwesomeIcon className="icon" icon={faTag}/> BULK DEALS</span>
                    <p>BUY 2, GET 1 FREE</p>
                </div>

                <Accordion>
                    <Accordion.Collapse className="card-footer-content" eventKey="0">
                        <div>
                            <p>
                                BUY 3, GET 2 FREE
                            </p>
                            <p>
                                BUY 4, GET 3 FREE
                            </p>
                            <p>
                                BUY 5, GET 4 FREE
                            </p>
                            <p>
                                BUY 6, GET 5 FREE
                            </p>
                            <p>
                                BUY 10, GET 10 FREE
                            </p>
                        </div>
                    </Accordion.Collapse>
                    <div className="button-container">
                        <Accordion.Toggle className="card-footer-button" as={Button} variant="link" eventKey="0"
                                          onClick={() => setActive(!isActive)}>
                            <span>{buttonNameHandler()}</span>
                        </Accordion.Toggle>
                    </div>

                </Accordion>
            </div>

        </Card><Card className="card">
            <div className="head">
                <p>POPULAR</p>
                <div className="license-type">
                    Unlimited Lease
                </div>
                <div className="price">
                    $219.99
                </div>
                <div className="per-unit">
                    PER UNIT
                </div>
            </div>
            <div className="description">
                <ul>
                    <li>Untagged Wav Track stems</li>
                    <li>Unlimited Distribution</li>
                    <li>Unlimited Commercial Use</li>
                    <li>Able to put song on all platforms (Spotify, Apple Music etc.)</li>
                    <li>Must Credit (prod. eddienubes)</li>
                </ul>
            </div>
            <div className="card-footer">
                <div className="card-footer-caption">
                    <span><FontAwesomeIcon className="icon" icon={faTag}/> BULK DEALS</span>
                    <p>BUY 2, GET 1 FREE</p>
                </div>

                <Accordion>
                    <Accordion.Collapse className="card-footer-content" eventKey="0">
                        <div>
                            <p>
                                BUY 3, GET 2 FREE
                            </p>
                            <p>
                                BUY 4, GET 3 FREE
                            </p>
                            <p>
                                BUY 5, GET 4 FREE
                            </p>
                            <p>
                                BUY 6, GET 5 FREE
                            </p>
                            <p>
                                BUY 10, GET 10 FREE
                            </p>
                        </div>
                    </Accordion.Collapse>
                    <div className="button-container">
                        <Accordion.Toggle className="card-footer-button" as={Button} variant="link" eventKey="0"
                                          onClick={() => setActive(!isActive)}>
                            <span>{buttonNameHandler()}</span>
                        </Accordion.Toggle>
                    </div>

                </Accordion>
            </div>

        </Card><Card className="card">
            <div className="head">
                <p>POPULAR</p>
                <div className="license-type">
                    Unlimited Lease
                </div>
                <div className="price">
                    $219.99
                </div>
                <div className="per-unit">
                    PER UNIT
                </div>
            </div>
            <div className="description">
                <ul>
                    <li>Untagged Wav Track stems</li>
                    <li>Unlimited Distribution</li>
                    <li>Unlimited Commercial Use</li>
                    <li>Able to put song on all platforms (Spotify, Apple Music etc.)</li>
                    <li>Must Credit (prod. eddienubes)</li>
                </ul>
            </div>
            <div className="card-footer">
                <div className="card-footer-caption">
                    <span><FontAwesomeIcon className="icon" icon={faTag}/> BULK DEALS</span>
                    <p>BUY 2, GET 1 FREE</p>
                </div>

                <Accordion>
                    <Accordion.Collapse className="card-footer-content" eventKey="0">
                        <div>
                            <p>
                                BUY 3, GET 2 FREE
                            </p>
                            <p>
                                BUY 4, GET 3 FREE
                            </p>
                            <p>
                                BUY 5, GET 4 FREE
                            </p>
                            <p>
                                BUY 6, GET 5 FREE
                            </p>
                            <p>
                                BUY 10, GET 10 FREE
                            </p>
                        </div>
                    </Accordion.Collapse>
                    <div className="button-container">
                        <Accordion.Toggle className="card-footer-button" as={Button} variant="link" eventKey="0"
                                          onClick={() => setActive(!isActive)}>
                            <span>{buttonNameHandler()}</span>
                        </Accordion.Toggle>
                    </div>

                </Accordion>
            </div>

        </Card>
        </Switch>

    )
};

export default PriceCards;
