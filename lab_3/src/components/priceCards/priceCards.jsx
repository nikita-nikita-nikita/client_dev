import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import "./priceCards.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const PriceCards = () => (
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

            <p><FontAwesomeIcon icon={faCircle}/>Untagged Wav Track stems</p>
            <p><FontAwesomeIcon icon={faCircle}/>Unlimited Distribution</p>
            <p><FontAwesomeIcon icon={faCircle}/>Unlimited Commercial Use</p>
            <p><FontAwesomeIcon icon={faCircle}/>Able to put song on all platforms (Spotify, Apple Music etc.)</p>
            <p><FontAwesomeIcon icon={faCircle}/>Must Credit (prod. eddienubes)</p>

        </div>
    </Card>
);

export default PriceCards;
