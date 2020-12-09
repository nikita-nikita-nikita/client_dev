import React from "react";
import './styleBasketRow.scss';
import {Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {LicenseBox} from "../priceCards";

const BasketRow = ({product, amount, license, url}) => {
    return (
        <Row className="align-items-center">
            <Col sm={2}><img className='w-100'
                             src={url}
                             alt="Track"/>
            </Col>
            <Col className="row-item" sm={4}>
                {product}
            </Col>
            <Col className="row-item" sm={3}>
                {amount}
            </Col>
            <Col sm={2}>
                <LicenseBox className="button" text="License"/>
            </Col>
            <Col sm={1}>
                <FontAwesomeIcon className='basket__remove-item' icon={faTimes}/>
            </Col>
        </Row>
    )
}

export default BasketRow;