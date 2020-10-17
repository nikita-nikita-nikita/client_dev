import React, {useContext, useState} from 'react';
import {Image, Button} from 'semantic-ui-react';
import Card from "react-bootstrap/Card";
import "./priceCards.scss";
import Accordion from 'react-bootstrap/Accordion'
import {faAngleUp, faTag, faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {AccordionContext, useAccordionToggle} from "react-bootstrap";
import CardDeck from 'react-bootstrap/CardDeck';

const ContextAwareToggle = ({eventKey, callback }) => {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    let buttonContent = isCurrentEventKey ?
        <span><FontAwesomeIcon icon={faAngleUp}/> LESS</span> : <span><FontAwesomeIcon icon={faAngleDown}/> MORE</span>;
    return (
        <button
            type="button"
            onClick={decoratedOnClick}
            className="card-footer-button"
        >
            {buttonContent}
        </button>
    );
}

const PriceCards = () => {
    const [activeKey, setActiveKey] = useState(null);

    return (
            <CardDeck className="card-container">
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
                        <span><FontAwesomeIcon className="icon" icon={faTag}/> FREE BEATS</span>
                        <p>BUY 2, GET 1 FREE</p>
                    </div>
                    <Accordion activeKey={activeKey} onSelect={e => setActiveKey(e)}>
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
                            <ContextAwareToggle eventKey="0"/>
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

                        <Accordion activeKey={activeKey} onSelect={e => setActiveKey(e)}>
                            <Accordion.Collapse className="card-footer-content" eventKey="1">
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
                                <ContextAwareToggle eventKey="1"/>
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

                        <Accordion activeKey={activeKey} onSelect={e => setActiveKey(e)}>
                            <Accordion.Collapse className="card-footer-content" eventKey="2">
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
                                <ContextAwareToggle eventKey="2"/>
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

                        <Accordion activeKey={activeKey} onSelect={e => setActiveKey(e)}>
                            <Accordion.Collapse className="card-footer-content" eventKey="3">
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
                                <ContextAwareToggle eventKey="3"/>
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

                        <Accordion activeKey={activeKey} onSelect={e => setActiveKey(e)}>
                            <Accordion.Collapse className="card-footer-content" eventKey="4">
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
                                <ContextAwareToggle eventKey="4"/>
                            </div>

                        </Accordion>
                    </div>

                </Card></CardDeck>
    )
};

export default PriceCards;
